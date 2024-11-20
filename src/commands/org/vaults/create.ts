import {PlatformClient, VaultValueType, VaultVisibilityType} from '@coveo/platform-client';
import {Command, Flags} from '@oclif/core';
import {Config} from '@coveo/cli-commons/config/config';


export default class CreateVault extends Command {
  public static description = 'Create a new Vault parameter in the specified organization';
  
  public static flags = {
    key: Flags.string({char: 'n', description: 'Key for the Vault parameter', required: true}),
    value: Flags.string({char: 'v', description: 'Value for the Vault parameter', required: true}),
    visibility: Flags.string({
      char: 't',
      default: VaultVisibilityType.PUBLIC,
      description: 'Visibility type (PUBLIC, OBFUSCATED, or STRICT)',
      options: [VaultVisibilityType.PUBLIC, VaultVisibilityType.OBFUSCATED, VaultVisibilityType.STRICT],
    }),
  };

  public async run() {
    const {flags} = await this.parse(CreateVault);

    // Load organization and access token from Coveo CLI configuration
    const {accessToken, organization} = this.configuration.get();

    if (!organization || !accessToken) {
      this.error('Organization ID or access token is not configured in the Coveo CLI. Please log in using the CLI.');
      return;
    }

    const platformClient = new PlatformClient({
      accessToken: () => accessToken,
      organizationId: organization,
    });

    try {
      this.log(`Creating Vault parameter: ${flags.key}`);
      await platformClient.vault.create({
        key: flags.key,
        value: flags.value,
        valueType: VaultValueType.STRING,
        vaultVisibilityType: flags.visibility as VaultVisibilityType.OBFUSCATED,
      });
      this.log(`Vault parameter "${flags.key}" created successfully.`);
    } catch (error) {
      this.error(`Failed to create Vault parameter: ${error}`);
    }
  }

  private get configuration() {
    return new Config(this.config.configDir);
  }
}
