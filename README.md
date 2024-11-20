coveo-vault-plugin
=================

manage your organization vaults


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/coveo-vault-plugin.svg)](https://npmjs.org/package/coveo-vault-plugin)
[![Downloads/week](https://img.shields.io/npm/dw/coveo-vault-plugin.svg)](https://npmjs.org/package/coveo-vault-plugin)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g coveo-vault-plugin
$ coveo-vault-plugin COMMAND
running command...
$ coveo-vault-plugin (--version)
coveo-vault-plugin/0.0.0 darwin-arm64 node-v22.1.0
$ coveo-vault-plugin --help [COMMAND]
USAGE
  $ coveo-vault-plugin COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`coveo-vault-plugin help [COMMAND]`](#coveo-vault-plugin-help-command)
* [`coveo-vault-plugin org vaults create`](#coveo-vault-plugin-org-vaults-create)
* [`coveo-vault-plugin org vaults list`](#coveo-vault-plugin-org-vaults-list)
* [`coveo-vault-plugin plugins`](#coveo-vault-plugin-plugins)
* [`coveo-vault-plugin plugins add PLUGIN`](#coveo-vault-plugin-plugins-add-plugin)
* [`coveo-vault-plugin plugins:inspect PLUGIN...`](#coveo-vault-plugin-pluginsinspect-plugin)
* [`coveo-vault-plugin plugins install PLUGIN`](#coveo-vault-plugin-plugins-install-plugin)
* [`coveo-vault-plugin plugins link PATH`](#coveo-vault-plugin-plugins-link-path)
* [`coveo-vault-plugin plugins remove [PLUGIN]`](#coveo-vault-plugin-plugins-remove-plugin)
* [`coveo-vault-plugin plugins reset`](#coveo-vault-plugin-plugins-reset)
* [`coveo-vault-plugin plugins uninstall [PLUGIN]`](#coveo-vault-plugin-plugins-uninstall-plugin)
* [`coveo-vault-plugin plugins unlink [PLUGIN]`](#coveo-vault-plugin-plugins-unlink-plugin)
* [`coveo-vault-plugin plugins update`](#coveo-vault-plugin-plugins-update)

## `coveo-vault-plugin help [COMMAND]`

Display help for coveo-vault-plugin.

```
USAGE
  $ coveo-vault-plugin help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for coveo-vault-plugin.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.18/src/commands/help.ts)_

## `coveo-vault-plugin org vaults create`

Create a new Vault parameter in the specified organization

```
USAGE
  $ coveo-vault-plugin org vaults create -k <value> -n <value> -o <value> -v <value> [-t PUBLIC|OBFUSCATED|STRICT]

FLAGS
  -k, --apiKey=<value>       (required) API key for the organization
  -n, --key=<value>          (required) Key for the Vault parameter
  -o, --orgId=<value>        (required) Coveo organization ID
  -t, --visibility=<option>  [default: PUBLIC] Visibility type (PUBLIC, OBFUSCATED, or STRICT)
                             <options: PUBLIC|OBFUSCATED|STRICT>
  -v, --value=<value>        (required) Value for the Vault parameter

DESCRIPTION
  Create a new Vault parameter in the specified organization
```

_See code: [src/commands/org/vaults/create.ts](https://github.com/Coveo-Turbo/coveo-vault-plugin/blob/v0.0.0/src/commands/org/vaults/create.ts)_

## `coveo-vault-plugin org vaults list`

List all Vault parameters in the specified organization

```
USAGE
  $ coveo-vault-plugin org vaults list -k <value> -o <value>

FLAGS
  -k, --apiKey=<value>  (required) API key for the organization
  -o, --orgId=<value>   (required) Coveo organization ID

DESCRIPTION
  List all Vault parameters in the specified organization
```

_See code: [src/commands/org/vaults/list.ts](https://github.com/Coveo-Turbo/coveo-vault-plugin/blob/v0.0.0/src/commands/org/vaults/list.ts)_

## `coveo-vault-plugin plugins`

List installed plugins.

```
USAGE
  $ coveo-vault-plugin plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ coveo-vault-plugin plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.17/src/commands/plugins/index.ts)_

## `coveo-vault-plugin plugins add PLUGIN`

Installs a plugin into coveo-vault-plugin.

```
USAGE
  $ coveo-vault-plugin plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into coveo-vault-plugin.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the COVEO_VAULT_PLUGIN_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the COVEO_VAULT_PLUGIN_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ coveo-vault-plugin plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ coveo-vault-plugin plugins add myplugin

  Install a plugin from a github url.

    $ coveo-vault-plugin plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ coveo-vault-plugin plugins add someuser/someplugin
```

## `coveo-vault-plugin plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ coveo-vault-plugin plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ coveo-vault-plugin plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.17/src/commands/plugins/inspect.ts)_

## `coveo-vault-plugin plugins install PLUGIN`

Installs a plugin into coveo-vault-plugin.

```
USAGE
  $ coveo-vault-plugin plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into coveo-vault-plugin.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the COVEO_VAULT_PLUGIN_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the COVEO_VAULT_PLUGIN_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ coveo-vault-plugin plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ coveo-vault-plugin plugins install myplugin

  Install a plugin from a github url.

    $ coveo-vault-plugin plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ coveo-vault-plugin plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.17/src/commands/plugins/install.ts)_

## `coveo-vault-plugin plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ coveo-vault-plugin plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ coveo-vault-plugin plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.17/src/commands/plugins/link.ts)_

## `coveo-vault-plugin plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ coveo-vault-plugin plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ coveo-vault-plugin plugins unlink
  $ coveo-vault-plugin plugins remove

EXAMPLES
  $ coveo-vault-plugin plugins remove myplugin
```

## `coveo-vault-plugin plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ coveo-vault-plugin plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.17/src/commands/plugins/reset.ts)_

## `coveo-vault-plugin plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ coveo-vault-plugin plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ coveo-vault-plugin plugins unlink
  $ coveo-vault-plugin plugins remove

EXAMPLES
  $ coveo-vault-plugin plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.17/src/commands/plugins/uninstall.ts)_

## `coveo-vault-plugin plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ coveo-vault-plugin plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ coveo-vault-plugin plugins unlink
  $ coveo-vault-plugin plugins remove

EXAMPLES
  $ coveo-vault-plugin plugins unlink myplugin
```

## `coveo-vault-plugin plugins update`

Update installed plugins.

```
USAGE
  $ coveo-vault-plugin plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.17/src/commands/plugins/update.ts)_
<!-- commandsstop -->
