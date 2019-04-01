describe('difficulty button functions', function() {
    
    beforeEach(() => {
        setFixtures(`
            <div class="my-card-column-easy visible"></div>
            <div class="my-card-column-medium visible"></div>
            <div class="my-card-column-medium invisible"></div>
            <div class="my-card-column-hard visible"></div>
            <div class="my-card-column-hard invisible"></div>
            <div></div>
            <h6 id="dashboard-high-score-text">Hard mode high score</h6>
            <h6></h6>
        `)
    });
    
    describe('easyButton function', function() {
        it('should remove class "visible" from html elements with class my-card-column-medium', function() {
            easyButton();
            expect($('.my-card-column-medium')).not.toHaveClass('visible');
        });
        it('should remove class "visible" from html elements with class my-card-column-hard', function() {
            easyButton();
            expect($('.my-card-column-hard')).not.toHaveClass('visible');
        });
        it('should add class "invisible" from html elements with class my-card-column-medium', function() {
            easyButton();
            expect($('.my-card-column-medium')).toHaveClass('invisible');
        });
        it('should add class "invisible" from html elements with class my-card-column-hard', function() {
            easyButton();
            expect($('.my-card-column-hard')).toHaveClass('invisible');
        });
        it('should add text "Easy mode high score" to element with id #dashboard-high-score-text', function() {
            easyButton();
            expect($('#dashboard-high-score-text').text()).toEqual('Easy mode high score');
        });
    });

    describe('mediumButton function', function() {
        it('all html elements with class my-card-column-medium should have the class of "visible"', function() {
            mediumButton();
            expect($('.my-card-column-medium')).toHaveClass('visible');
        });
        it('all html elements with class my-card-column-medium should not have the class of "invisible"', function() {
            mediumButton();
            expect($('.my-card-column-medium')).not.toHaveClass('invisible');
        });
        it('all html elements with class my-card-column-hard should have the class of "invisible"', function() {
            mediumButton();
            expect($('.my-card-column-hard')).toHaveClass('invisible');
        });
        it('all html elements with class my-card-column-hard should not have the class of "visible"', function() {
            mediumButton();
            expect($('.my-card-column-hard')).not.toHaveClass('visible');
        });
        it('should add text "Medium mode high score" to element with id #dashboard-high-score-text', function() {
            mediumButton();
            expect($('#dashboard-high-score-text').text()).toEqual('Medium mode high score');
        });
    });
    
    describe('hardButton function', function() {
        it('all html elements with class my-card-column-medium should have the class of "visible"', function() {
            hardButton();
            expect($('.my-card-column-medium')).toHaveClass('visible');
        });
        it('all html elements with class my-card-column-medium should not have the class of "invisible"', function() {
            hardButton();
            expect($('.my-card-column-medium')).not.toHaveClass('invisible');
        });
        it('all html elements with class my-card-column-hard should have the class of "visible"', function() {
            hardButton();
            expect($('.my-card-column-hard')).toHaveClass('visible');
        });
        it('all html elements with class my-card-column-hard should not have the class of "invisible"', function() {
            hardButton();
            expect($('.my-card-column-hard')).not.toHaveClass('invisible');
        });
        it('should add text "Hard mode high score" to element with id #dashboard-high-score-text', function() {
            hardButton();
            expect($('#dashboard-high-score-text').text()).toEqual('Hard mode high score');
        });
    });

});

describe('muteAudio function', function() {
    
    beforeEach(() => {
        silence = true; 
    });
    
    it('should return silence = false', function(){
        let result = muteAudio();
        expect(silence).toBe(false);
        
    });
    
        it('should return silence = true', function(){
        silence = false;
        let result = muteAudio();
        expect(silence).toBe(true);
        
    });
});

describe('howManyCards function', function() {

    it('should return 4', function() {
        setFixtures(`
			<div class="visible"></div><div class="visible"></div><div class="visible"></div><div class="visible"></div>
            <div class="visible"></div><div class="visible"></div><div class="visible"></div><div class="visible"></div>
			`)
        let result = howManyCards();
        expect(result).toEqual(4);

    });
    
    it('should return 6', function() {
        setFixtures(`
			<div class="visible"></div><div class="visible"></div><div class="visible"></div><div class="visible"></div>
            <div class="visible"></div><div class="visible"></div><div class="visible"></div><div class="visible"></div>
            <div class="visible"></div><div class="visible"></div><div class="visible"></div><div class="visible"></div>
			`)
        let result = howManyCards();
        expect(result).toEqual(6);

    });
    
    it('should return 8', function() {
        setFixtures(`
			<div class="visible"></div><div class="visible"></div><div class="visible"></div><div class="visible"></div>
            <div class="visible"></div><div class="visible"></div><div class="visible"></div><div class="visible"></div>
            <div class="visible"></div><div class="visible"></div><div class="visible"></div><div class="visible"></div>
            <div class="visible"></div><div class="visible"></div><div class="visible"></div><div class="visible"></div>
		`)
        let result = howManyCards();
        expect(result).toEqual(8);
    });
});

describe('checkCounter function', function() {
    
    beforeEach(() => {
        countSelected = 0; 
    });
    
    it('should return true when countSelected = 0', function() {
        let result = checkCounter(); 
        expect(result).toBe(true);
    
    });
    
    it('should return true when countSelected = 1', function() {
        countSelected = 1; 
        let result = checkCounter(); 
        expect(result).toBe(true);
    
    });
    
        it('should return false when countSelected = 2', function() {
        countSelected = 2; 
        let result = checkCounter(); 
        expect(result).toBe(false);
    
    });
});


//arrange, act, assert

describe('checkMatch function', function() {
    
    describe('when cards do not match', function() {
        
        beforeEach(() => {
            setFixtures(`
                <div class="flip-card card-container mx-auto face-up disabled selected">
                    <div class="flip-card-inner">
                        <figure class="flip-card-front game-card game-card-back" title="Flip card face down"></figure>
                        <figure class="flip-card-back game-card lightning" title="lightning"></figure>
                    </div>
                </div>
                <div class="flip-card card-container mx-auto face-up disabled selected">
                    <div class="flip-card-inner">
                        <figure class="flip-card-front game-card game-card-back" title="Flip card face down"></figure>
                        <figure class="flip-card-back game-card mater" title="mater"></figure>
                    </div>
                </div>
            `)
         });

        it('should remove classes "face-up disabled selected" ', function() {
            setTimeout(function(){
                checkMatch();
                expect($('.flip-card')).not.toHaveClass('face-up');
                expect($('.flip-card')).not.toHaveClass('disabled');
                expect($('.flip-card')).not.toHaveClass('selected');
                done();
            }, 1100);
        });
        it('should add class "face-down', function() {
            setTimeout(function(){
                checkMatch();
                expect($('.flip-card')).toHaveClass('face-down');
                done();
            }, 1100); 
        });
        it('should increase flipCounter by 1', function() {
           flipCounter = 3;
            setTimeout(function(){
                checkMatch();
                expect(flipCounter).toBe(4);
                done();
            }, 1100); 
        });
    });
    
    describe('when cards do match', function() {
        beforeEach(() => {
            setFixtures(`
                <div class="flip-card card-container mx-auto face-up disabled selected">
                    <div class="flip-card-inner">
                        <figure class="flip-card-front game-card game-card-back" title="Flip card face down"></figure>
                        <figure class="flip-card-back game-card lightning" title="lightning"></figure>
                    </div>
                </div>
                <div class="flip-card card-container mx-auto face-up disabled selected">
                    <div class="flip-card-inner">
                        <figure class="flip-card-front game-card game-card-back" title="Flip card face down"></figure>
                        <figure class="flip-card-back game-card lightning" title="lightning"></figure>
                    </div>
                </div>
            `)
        });
         
        it('should remove class "selected"',function() {
             checkMatch();
             expect($('.flip-card')).not.toHaveClass('selected');
        });
        it('should add classes "matched disabled"',function() {
             checkMatch();
             expect($('.flip-card')).toHaveClass('matched');
             expect($('.flip-card')).toHaveClass('disabled');
        });
    });
});


/*    beforeEach(() => {
        // How to write a spy: 
        let object = { fakeCountTurnsFunction: function() {
                jasmine.createSpy('countTurns', function(){});
            }
        }
        const countTurnsSpy = spyOn(object, 'fakeCountTurnsFunction');
    })*/