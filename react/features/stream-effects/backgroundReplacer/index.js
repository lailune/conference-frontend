// @flow

import * as bodyPix from '@tensorflow-models/body-pix';
import BackgroundReplacer from './BackgroundReplacer';

/**
 * Creates a new instance of BackgroundReplacer. This loads the bodyPix model that is used to
 * extract person segmentation.
 *
 * @returns {Promise<BackgroundReplacer>}
 */
export async function createBackgroundReplacer() {
    if (!MediaStreamTrack.prototype.getSettings && !MediaStreamTrack.prototype.getConstraints) {
        throw new Error('BackgroundReplacer not supported!');
    }

    // An output stride of 16 and a multiplier of 0.5 are used for improved
    // performance on a larger range of CPUs.
    const bpModel = await bodyPix.load({
        architecture: 'MobileNetV1',
        outputStride: 8,
        multiplier: 0.50,
        quantBytes: 1
    });

    return new BackgroundReplacer(bpModel);
}
