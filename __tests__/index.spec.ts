import Application from "@/index"

describe('Application', () => { 
  describe('Run Application', () => { 
    it('should have defined runApp method', () => {
      expect(Application).toBeDefined();
      expect(new Application().runApp).toBeDefined();
    })
  })  
})