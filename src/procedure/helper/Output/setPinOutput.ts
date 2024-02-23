import type { SerialPort } from 'serialport'

export const setPinOutput = (pin: number, port: SerialPort): Promise<void> => {
  return new Promise((resolve, reject) => {
    const setPinModeOutput = Buffer.from([0xf4, pin, 1])
    port.write(setPinModeOutput, (err) => {
      if (err) {
        //console.log('Error on write: ', err.message);
        reject(err)
      } else {
        resolve()
      }
    })
  })
}
