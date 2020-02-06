class HandShake {
    handshake: number;
  
    constructor(handshake: number) {
      this.handshake = handshake;
    }
  
    commands() {
      const handshakes: [number, string][] = [
        [0x01, 'wink'],
        [0x02, 'double blink'],
        [0x04, 'close your eyes'],
        [0x08, 'jump'],
      ];
  
      const result = handshakes
        .filter(
          ([code, _]) => this.handshake & code
        )
        .map(
          ([_, command]) => command
        );
  
      if (this.handshake & 0x10) {
        return result.reverse();
      }
      else {
        return result;
      }
    }
  }
  
  export default HandShake;