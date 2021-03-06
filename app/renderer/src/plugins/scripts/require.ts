import { TUIStore } from '../UI/store'
import { IDisposable } from '../../Types/disposable'
import { SidebarModule } from './modules/sidebar'
import { IModuleConfig } from './types'
import { UIModule } from './modules/ui'
import { NotificationModule } from './modules/footer'
import { FSModule } from './modules/fs'
import { ENVModule } from './modules/env'
import { UtilsModule } from './modules/utils'

const BuiltInModules = new Map<string, (config: IModuleConfig) => unknown>([
	['@bridge/ui', UIModule],
	['@bridge/sidebar', SidebarModule],
	['@bridge/notification', NotificationModule],
	['@bridge/fs', FSModule],
	['@bridge/env', ENVModule],
	['@bridge/utils', UtilsModule],
])

export function createEnv(uiStore: TUIStore, disposables: IDisposable[]) {
	return async (importName: string) => {
		const module = BuiltInModules.get(importName)
		if (module) return module({ uiStore, disposables })
	}
}
