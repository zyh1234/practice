import Service from '@/core/BaseService';

export default class DictService extends Service {
  constructor(ctx) {
    super(ctx);
    this.model = ctx.model.Dict;
  }
}
