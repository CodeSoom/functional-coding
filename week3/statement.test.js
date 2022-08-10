const { statement } = require('./statement');

describe('statement', () => {
  describe('with tragedy', () => {
    const invoice = {
      "customer": "BigCo",
      "performances": [
        {
          "playID": "hamlet",
          "audience": 1,
          "price": 5000
        },
      ]
    };
  
    const plays = {
      "hamlet": { "name": "Hamlet", "type": "tragedy" },
    }

    it('returns someting', () => {
      const result = statement(invoice, plays);
  
      expect(result).toContain('BigCo');
      expect(result).toContain('Hamlet : $400.00 (1석)');
      expect(result).toContain('총액: $400.00');
      expect(result).toContain('적립 포인트: 0점');
    });
  })
});
