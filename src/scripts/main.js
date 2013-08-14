(function(){

  bespoke.plugins.backgroundElement = function(deck) {
    var el = document.createElement('div');
    el.className = 'background';
    deck.parent.appendChild(el);
  };

	bespoke.horizontal.from('article', {
    backgroundElement: true,
    bullets: 'li, .bullet',
    hash: true,
    state: true
	});

}());