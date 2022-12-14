import moment from 'moment'
class Order{

    constructor(id,items,totalAmount,date){
        this.id = id;
        this.items = items;
        this.totalAmount = totalAmount;
        this.date = date
    }
    get readableDate(){
        // return this.date.toLocaleDateString('en-En',{
        //     year:"numeric",
        //     month:"long",
        //     day:"numeric",
        //     hour:'2-digit',
        //     minutue:"2-digit"
        // })
        return moment(this.date).format('MMMM DD YYYY, hh:mm')
    }
}

export default Order