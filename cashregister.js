var cashRegister = {
	
	var totalCost = 0;
	var totalQty = 0;
	var lastItem = [];
	
	add(qty, price): {
		var itemCost = qty * price;
		this.totalCost += itemCost;
		this.lastItem.push(itemCost);
		this.totalQty += qty;
	},
	scan(item, qty): {
		var itemCost = 0;
		switch(item){
			case 'milk': itemCost=2; break;
			case 'meat': itemCost=5; break;
			case 'eggs': itemCost=1; break;
			case else: alert("this item can't be scanned!");
		}
		this.add(qty,itemCost)
	},
	void: {
	
	},
	disc: {
	
	}



}