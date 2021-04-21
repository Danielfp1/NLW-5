import { Repository, EntityRepository } from "typeorm";

import { setting } from "../entities/Setting";

@EntityRepository(setting)
class SettingsRepository extends Repository<setting>{ }

export { SettingsRepository };