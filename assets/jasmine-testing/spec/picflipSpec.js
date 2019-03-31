describe('turnsCounter function', function() {
    
    beforeEach(() => {
        countSelected = 0; 
    });
    
    it('should return true when countSelected = 0', function() {
        // arrange
        
        //act
        let result = checkCounter(); 
        
        //assert
        expect(result).toBe(true);
    
    });
    
    it('should return true when countSelected = 1', function() {
        // arrange
        countSelected = 1; 
        //act
        let result = checkCounter(); 
        
        //assert
        expect(result).toBe(true);
    
    });
    
        it('should return false when countSelected = 2', function() {
        // arrange
        countSelected = 2; 
        
        //act
        let result = checkCounter(); 
        
        //assert
        expect(result).toBe(false);
    
    });
});

describe('muteAudio function', function() {
    
    beforeEach(() => {
        silence = true; 
    });
    
    it('should return silence = false', function(){
        //arrange
        
        //act
        let result = muteAudio();
        
        //assert
        expect(silence).toBe(false);
        
    });
    
        it('should return silence = true', function(){
        //arrange
        silence = false;
        //act
        let result = muteAudio();
        
        //assert
        expect(silence).toBe(true);
        
    });
});

describe('howManyCards function', function() {
    
    beforeEach(() => {
        num = 0;
    });
    
    it('should return 4', function() {
        //arrange
        num = 8;
        //act
        let result = howManyCards(num);
        //assert
        expect(result).toBe(4);
        
    });
});