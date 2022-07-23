import React, { useState } from 'react';
import { Tag, Icon, Button, Alert } from 'rsuite';
import firebase from 'firebase/app';
import { auth } from '../../misc/firebase';

/* import {
  GoogleAuthProvider,
  linkWithPopup,
  unlink,
} from 'firebase/auth'; */


const ProviderBlock = () => {
	const [isConnected, setIsConnected] = useState({
		'google.com': auth.currentUser.providerData.some(
			data => data.providerId === 'google.com'
		)
	});

	const updateIsConnected = (providerId, value) => {
		setIsConnected(p => {
			return {
				...p,
				[providerId]: value,
			};
		});
	};

	/*   const unlinkProvider = async providerId => {
		try {
		  if (auth.currentUser.providerData.length === 1) {
			throw new Error(`You can not disconnect from ${providerId}`);
		  }
	
		  await auth.currentUser.unlink(providerId);
		  updateIsConnected(providerId, false);
		  Alert.info(`Disconnected from ${providerId}`, 4000);
		} catch (err) {
		  Alert.error(err.message, 4000);
		}
	  }; */

	const unlink = async (providerId) => {

		try {
			if (auth.currentUser.providerData.length === 1) {
				throw new Error(`You can not disconnect from ${providerId}`)
			}

			await auth.currentUser.unlink(providerId);
			updateIsConnected(providerId, false);
			Alert.info(`Disconnected from ${providerId}`)
		} catch (err) {
			Alert.error(err.message, 4000);
		}

	}

	// change v9 syntax to v8 syntax to resolve import error
	const unlinkGoogle = () => {
		unlink('google.com');
	};

	const link = async (provider) => {
		try {
			await auth.currentUser.linkWithPopup(provider);
			Alert.info(`Linked to ${provider.providerId}`, 4000)

			updateIsConnected(provider.providerId, true);

		} catch (err) {
			Alert.error(err.message, 4000);
		}
	}

	/*   const linkProvider = async provider => {
		try {
		  await linkWithPopup(auth.currentUser, provider);
		  Alert.info(`Linked to ${provider.providerId}`, 4000);
		  updateIsConnected(provider.providerId, true);
		} catch (err) {
		  Alert.error(err.message, 400);
		}
	  };
	
	 */

	// change v9 syntax to v8 syntax to resolve import error
	const linkGoogle = () => {
		link(new firebase.auth.GoogleAuthProvider());
	};

	return (
		<div>
			{isConnected['google.com'] && (
				<Tag color="green" closable onClose={unlinkGoogle}>
					<Icon icon="google" /> Connected
				</Tag>
			)}
			<div className="mt-2">
				{!isConnected['google.com'] && (
					<Button block color="green" onClick={linkGoogle}>
						<Icon icon="google" /> Link to Google
					</Button>
				)}
			</div>
		</div>
	);
};

export default ProviderBlock;