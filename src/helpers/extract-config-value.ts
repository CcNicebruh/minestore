import { Config } from "@/app/providers/config-provider";

export const extractConfigValue = (id: string, config: Config) => {
    const options = config.config.flatMap((header) => header.options);
    const option = options.find((option) => option.id === id);

    return option?.default as string;
};
