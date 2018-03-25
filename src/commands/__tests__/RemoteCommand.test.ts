import { RemoteCommand } from '../RemoteCommand';
import { ConnectionFactory } from '../../ConnectionFactory';

const connectionFactory = new ConnectionFactory();

test('RemoteCommand should contain correct command', () => {
  const cmd = new RemoteCommand('pwd');
  expect(cmd.cmd).toEqual('pwd');
});

test('RemoteCommand should execute safely', async () => {
  const cmd = new RemoteCommand('pwd');
  const output = await Promise.all(cmd.execute([await connectionFactory.create({})]));
  output.forEach(promise => expect(promise).toBe('success'));
});
