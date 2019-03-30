describe('turnsCounter function', function() {
    
    beforeEach(() => {
       let countSelected = 1; 
    });
    
    it('should return true', function() {
        //act
        const result = checkCounter(); 
        
        //assert
        expect(result).toBe(true);
    
    });
});