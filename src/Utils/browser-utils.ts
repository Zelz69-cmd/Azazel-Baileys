import { platform, release } from 'os'
import { proto } from '../../WAProto/index.js'
import type { BrowsersMap } from '../Types'

const PLATFORM_MAP = {
	aix: 'AIX',
	darwin: 'Mac OS',
	win32: 'Windows',
	android: 'Android',
	freebsd: 'FreeBSD',
	openbsd: 'OpenBSD',
	sunos: 'Solaris',
	linux: undefined,
	haiku: undefined,
	cygwin: undefined,
	netbsd: undefined
}

export const Browsers: BrowsersMap = {
    ubuntu: browser => ['NΛILONG XCVI', browser, '∞'],
    macOS: browser => ['NΛILONG MAC', browser, 'XCVI'],
    baileys: browser => ['NAILONG XCVI', 'AZAZEL', '∞'],
    windows: browser => ['ZEL OS', browser, '∞'],
    /** The appropriate browser based on your OS & release */
    appropriate: browser => [PLATFORM_MAP[platform()] || 'Ubuntu', browser, release()]
}

export const getPlatformId = (browser: string) => {
	const platformType = proto.DeviceProps.PlatformType[browser.toUpperCase() as any]
	return platformType ? platformType.toString() : '1' //chrome
}
