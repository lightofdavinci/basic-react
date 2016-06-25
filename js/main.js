var Main = React.createClass({
getInitialState(){
     return {
       converter: new showdown.Converter(),
       value: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\n *[made by Dan Volosnikov](https://freecodecamp.com/lightofdavinci)*',}
 },
 update(event){
this.setState({value: event.target.value});
 }, 
 render(){
    return (
      <div className="row">
      <div className="col-md-6"> 
      <textarea type="text" className="form-control" id="leArea" rows="15" defaultValue={this.state.value} onChange={this.update}></textarea>
      </div>
      <div className="col-md-6" id="box">
      <div dangerouslySetInnerHTML={{__html: this.state.converter.makeHtml(this.state.value)}} />
      </div>
      </div>
    )
  }
});

ReactDOM.render(<Main />, document.getElementById('app'));