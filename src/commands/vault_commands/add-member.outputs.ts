import chalk from 'chalk';

export const memberAdded = ({
  email,
  vaultId,
  vaultName,
  vaultEncryptedPrivateKey,
  json,
}: {
  email: string;
  vaultId: string;
  vaultName: string;
  vaultEncryptedPrivateKey: string;
  json: boolean | undefined;
}) => {
  if (json) {
    process.stdout.write(
      JSON.stringify(
        {
          VaultId: vaultId,
          VaultEncryptedPrivateKey: vaultEncryptedPrivateKey,
        },
        null,
        2,
      ),
    );
    process.exit(0);
  }

  process.stdout.write(`
✨ ${chalk.cyan(email)} added to ${chalk.cyan(vaultName)} vault!

To view members:

    ${chalk.bold(`$ snip vault list-members "${vaultName}"`)}

`);

  process.exit(0);
};
