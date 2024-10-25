import { NativeModule } from 'expo';
import { registerWebModule } from 'expo-modules-core';

import ImageManipulatorContext from './web/ImageManipulatorContext.web';
import ImageManipulatorImageRef from './web/ImageManipulatorImageRef.web';
import { loadImageAsync } from './web/utils.web';

class ImageManipulator extends NativeModule {
  Context = ImageManipulatorContext;
  Image = ImageManipulatorImageRef;

  manipulate(uri: string): ImageManipulatorContext {
    return new ImageManipulatorContext(() => loadImageAsync(uri));
  }
}

export default registerWebModule(ImageManipulator);
