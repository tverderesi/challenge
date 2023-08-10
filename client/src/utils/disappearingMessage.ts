export async function disappearingMessage(
  setState,
  message,
  time,
  callback = null as any
) {
  setState(message);
  await setTimeout(() => {
    setState(null);
  }, time);
  if (callback) {
    callback();
  }
}
