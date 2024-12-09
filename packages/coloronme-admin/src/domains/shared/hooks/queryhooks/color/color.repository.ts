import { requestInstance } from '../../../api/client';
import { ColorResponse } from '../common.typs';
import { MyColor, RegistrationColorTypeArg } from './color.type';

class ColorRepository {
  async getColor() {
    return await requestInstance.get<MyColor>('color');
  }

  async removeMyColorType(colorTypeId: number) {
    return await requestInstance.delete(`color/${colorTypeId}`);
  }

  async registMyColorType(args: RegistrationColorTypeArg) {
    return await requestInstance.post('color', args);
  }

  async modifyMyColorType(args: RegistrationColorTypeArg) {
    return await requestInstance.patch(`color/${args.personalColorTypeId}`, args);
  }
}

export default new ColorRepository();
