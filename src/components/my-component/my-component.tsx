import { Component, Prop, h, getAssetPath, Element  } from '@stencil/core';
// import { currencies } from '../../utils/utils';
@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
  assetsDirs: ['assets']
})
export class MyComponent {
  // @Element() private element: HTMLElement;
  @Element() flashElement: HTMLElement;
  private timeBar: HTMLElement;
  @Prop() first: string;

  @Prop() middle: string;

  @Prop() last: string;

  @Prop() image = "dcxLogo.png";

  @Prop() inrTocrypto = 'inrTocrypto.svg';

  @Prop() visitGo = 'visitGo.svg';

  // @Prop() cryptoCurrencies = ['BTC','USDT','ETH'].forEach(op => document.getElementById('rec_mode').innerHTML += `<option value="${op}">${op}</option>`);
  // private getText(): string {
  //   return format(this.first, this.middle, this.last);
  // }

  // private getcurr() {
  //   return currencies();
  // }

  componentDidLoad() {
    // console.log(this.element,this.element.querySelector('.favCryptoInputBox'),'rohit');
    this.timeBar = this.flashElement.querySelector("[id='year']");
    console.log(this.timeBar,'rohit', document.querySelector('.time-bar'));

  }

  render() {
    return (
    <div class='widget-everything'>
      <div class='topWidgetPart'>
        <div class='dcxBranding'>
          <img src={getAssetPath(`./assets/${this.image}`)} />
        </div>

        <div class='cryptoCalcHeading'>
          <h4>CRYPTOCURRENCY CALCULATOR</h4>
        </div>

        <div class='inrTocryptoHeading'>
          INR <span><img src={getAssetPath(`./assets/${this.inrTocrypto}`)} /></span> CRYPTO
        </div>
      </div>

      <div class='centerWidgetPart'>
        <div class='inputBox'>
          <p>INPUT AMOUNT IN INR</p>
          <div class='inrInputBox'>
              <input placeholder = '0.00' /> 
              <span>INR</span>
          </div>
        </div>

        <div class='inputBox'>
          <p>Choose your favourite cryptocurrency</p>
          <div class="time-bar">
              <input placeholder = '0.00' /> 
              {/* {this.getcurr()} */}
              <select id="year">
                {/* <option value="volvo"></option> */}
              </select>
          </div>
        </div>
      </div>

      <div class='bottomWidgetPart'>
        <div class='button'>
          <img src={getAssetPath(`./assets/${this.visitGo}`)} />
        </div>

        <div class='bottomText'>
            Ready to invest in your first cryptocurrency?
           <span>Click the button above!</span>
        </div>
      </div>

    </div>
    );
  }
}
