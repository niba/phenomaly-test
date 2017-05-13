import { convertBytesToSize } from './utils';

describe('calculate properly from bytes ', () => {

  it('to kB', () => {
    const first = convertBytesToSize(50);
    expect(first).toEqual('0.1kB');

    const second = convertBytesToSize(1000);
    expect(second).toEqual('1.0kB');

    const third = convertBytesToSize(1000 * 900);
    expect(third).toEqual('900.0kB');
  })

  it('to MB', () => {
    const first = convertBytesToSize(1000 * 1000);
    expect(first).toEqual('1.0MB');

    const second = convertBytesToSize(1000 * 1000 * 53);
    expect(second).toEqual('53.0MB');

    const third = convertBytesToSize(1500000);
    expect(third).toEqual('1.5MB');
  })

})