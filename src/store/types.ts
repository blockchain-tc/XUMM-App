/* Global ==================================================================== */
export enum EncryptionLevels {
    Passphrase = 'Passphrase', // used passphrase to encrypt the secret
    Passcode = 'Passcode', // use encrypted passcode to encrypt the secrets
    None = 'None', // WARNING: this is not secure
}

export enum AccessLevels {
    Full = 'Full', // have full access and can sign the transaction
    Readonly = 'Readonly', // just readonly access
}

export enum BiometryType {
    FaceID = 'FaceID',
    TouchID = 'TouchID',
    Biometrics = 'Biometrics',
    None = 'None',
}

export enum NodeChain {
    Main = 'Mainnet',
    Test = 'Testnet',
    Dev = 'Devnet',
    Unknown = 'Unknown',
}
