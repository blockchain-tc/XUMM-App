/* eslint-disable implicit-arrow-linebreak */

import { storiesOf } from '@storybook/react-native';

import withPropsCombinations from '../../../../storybook/matrix';

import { Badge } from '../Badge';

const SIZES = ['small', 'medium', 'large'] as const;

storiesOf('Badge', module)
    .add(
        'Bithomp',
        withPropsCombinations(Badge, {
            size: SIZES,
            type: ['bithomp'],
        }),
    )
    .add(
        'XRPScan',
        withPropsCombinations(Badge, {
            size: SIZES,
            type: ['xrpscan'],
        }),
    )
    .add(
        'XRPLNS',
        withPropsCombinations(Badge, {
            size: SIZES,
            type: ['xrplns'],
        }),
    )
    .add(
        'PayId',
        withPropsCombinations(Badge, {
            size: SIZES,
            type: ['payid'],
        }),
    )
    .add(
        'Success',
        withPropsCombinations(Badge, {
            size: SIZES,
            type: ['success'],
        }),
    );
