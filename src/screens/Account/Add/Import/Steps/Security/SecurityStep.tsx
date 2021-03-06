/**
 * Import Account/Security step
 */

import React, { Component } from 'react';
import { SafeAreaView, View, Text } from 'react-native';

import { EncryptionLevels } from '@store/types';

import Localize from '@locale';
// components
import { Button, RadioButton, Footer } from '@components/General';
// style
import { AppStyles } from '@theme';

import { StepsContext } from '../../Context';

/* types ==================================================================== */
export interface Props {}

export interface State {
    encryptionLevel: EncryptionLevels;
}

/* Component ==================================================================== */
class SecurityStep extends Component<Props, State> {
    static contextType = StepsContext;
    context: React.ContextType<typeof StepsContext>;

    constructor(props: Props) {
        super(props);

        this.state = {
            encryptionLevel: EncryptionLevels.Passcode,
        };
    }

    onRadioButtonPress = (level: EncryptionLevels) => {
        this.setState({
            encryptionLevel: level,
        });
    };

    goNext = () => {
        const { goNext, setEncryptionLevel } = this.context;
        const { encryptionLevel } = this.state;

        setEncryptionLevel(encryptionLevel, () => {
            if (encryptionLevel === EncryptionLevels.Passphrase) {
                goNext('PassphraseStep');
            } else {
                goNext('LabelStep');
            }
        });
    };

    render() {
        const { goBack } = this.context;
        const { encryptionLevel } = this.state;

        return (
            <SafeAreaView testID="account-import-security-view" style={[AppStyles.container]}>
                <Text style={[AppStyles.p, AppStyles.textCenterAligned, AppStyles.paddingHorizontal]}>
                    {Localize.t('account.chooseWisely')}
                </Text>
                <View style={[AppStyles.contentContainer, AppStyles.centerContent, AppStyles.paddingSml]}>
                    <RadioButton
                        testID="passcode-radio-button"
                        onPress={() => {
                            this.onRadioButtonPress(EncryptionLevels.Passcode);
                        }}
                        description={Localize.t('account.passcodeOptionDesc')}
                        labelSmall={Localize.t('account.signWithPasscode')}
                        label={Localize.t('global.standard')}
                        checked={encryptionLevel === EncryptionLevels.Passcode}
                    />

                    <RadioButton
                        testID="passphrase-radio-button"
                        onPress={() => {
                            this.onRadioButtonPress(EncryptionLevels.Passphrase);
                        }}
                        description={Localize.t('account.passwordOptionDesc')}
                        labelSmall={Localize.t('account.signWithPassword')}
                        label={Localize.t('global.extraSecurity')}
                        checked={encryptionLevel === EncryptionLevels.Passphrase}
                    />
                </View>

                <Footer style={[AppStyles.centerAligned, AppStyles.row]}>
                    <View style={[AppStyles.flex3, AppStyles.paddingRightSml]}>
                        <Button
                            testID="back-button"
                            secondary
                            label={Localize.t('global.back')}
                            icon="IconChevronLeft"
                            onPress={() => {
                                goBack();
                            }}
                        />
                    </View>
                    <View style={[AppStyles.flex5]}>
                        <Button
                            testID="next-button"
                            textStyle={AppStyles.strong}
                            label={Localize.t('global.next')}
                            onPress={() => {
                                this.goNext();
                            }}
                        />
                    </View>
                </Footer>
            </SafeAreaView>
        );
    }
}

/* Export Component ==================================================================== */
export default SecurityStep;
