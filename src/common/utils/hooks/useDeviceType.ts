import { useEffect, useState } from 'react';

export const useDeviceType = () => {
	const [deviceType, setDeviceType] = useState<'desktop' | 'mobile'>('desktop');
	const mobileWidth = 768;

	useEffect(() => {
		if (window.innerWidth <= mobileWidth && deviceType !== 'mobile') setDeviceType('mobile');
		if (window.innerWidth > mobileWidth && deviceType !== 'desktop') setDeviceType('desktop');
		const handleWindowResize = () => {
			if (window.innerWidth <= mobileWidth && deviceType !== 'mobile') setDeviceType('mobile');
			if (window.innerWidth > mobileWidth && deviceType !== 'desktop') setDeviceType('desktop');
		};
		window.addEventListener('resize', handleWindowResize);

		return () => window.removeEventListener('resize', handleWindowResize);
	}, [deviceType]);

	return {
		deviceType,
	};
};
