import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule],
  styleUrls: ['./challenge.component.css']
})
export class ChallengeComponent {
  evaluationType: '1-step' | '2-step' = '1-step';

  accountSizes = ['$5,000', '$10,000', '$25,000', '$50,000'];

  plans = {
    '1-step': [
      { label: 'Target', values: ['-', '-', '-', '-'] },
      { label: 'Profit share Percentage', values: ['Up to 90%', 'Up to 90%', 'Up to 90%', 'Up to 90%'] },
      { label: 'Max. daily loss', values: ['6%', '6%', '6%', '6%'] },
      { label: 'Max. Loss', values: ['$300', '$600', '$1,500', '$3,000'] },
      { 
        label: 'Leverage', 
        values: [
          'BTC, ETH-5:1<br>for other-2:1',
          'BTC, ETH-5:1<br>for other-2:1',
          'BTC, ETH-5:1<br>for other-2:1',
          'BTC, ETH-5:1<br>for other-2:1'
        ] 
      },
      { label: 'Evaluation fee', values: ['$35', '$75', '$190', '$375'], isFee: true }
    ],
    '2-step': [
      { label: 'Target', values: ['-', '-', '-', '-'] },
      { label: 'Profit share Percentage', values: ['Up to 90%', 'Up to 90%', 'Up to 90%', 'Up to 90%']},
      { label: 'Max. daily loss', values: ['6%', '6%', '6%', '6%'] },
      { label: 'Max. Loss', values: ['$250', '$500', '$1,250', '$2,500'] },
      { 
        label: 'Leverage', 
        values: [
          'BTC, ETH-5:1<br>for other-2:1',
          'BTC, ETH-5:1<br>for other-2:1',
          'BTC, ETH-5:1<br>for other-2:1',
          'BTC, ETH-5:1<br>for other-2:1'
        ] 
      },
      { label: 'Evaluation fee', values: ['$45', '$90', '$250', '$450'], isFee: true }
    ]
  };

  faqs = {
    '1-step': [
      { question: 'How long does it take to receive my funded account?', answer: 'Upon passing your Assessment, you will receive an email with instructions on how to access and complete both your “Know Your Customer” verification and your “Trader Agreement”. Once both are completed your Funded Account will be created, funded and issued to you typically within 24-48 business hours. You will receive a confirmation email once this account is being enabled. ' },
      { question: 'Once I pass the Assessment am I provided with a demo or funded account? ', answer: 'Once you pass the Assessment, we provide you with a funded account, backed by our capital. The capital in your funded Account is notional and may not match the amount of capital on deposit with the Liquidity Provider. A Funded Account is notionally funded when actual funds in the account (i.e., the equity in a Funded Account represented by the amount of capital) differs from the nominal account size (i.e., the size of the Funded Account that establishes the initial account value and level of trading). Notional funds are the difference between nominal account size and actual capital in a Funded Account. '},
      {question: 'Do we manipulate the pricing or executions you receive in your funded account? ?', answer:'No. We do not have any control over pricing from the liquidity provider or on the executions on your trades.'},
      {question: 'Who is the counterparty to my trades? ', answer:'For purposes of managing risk and minimizing transaction costs, we may offset or negate market risk and act as the direct counterparty to certain trades initiated in the Account. Such trades are executed at prices provided by the Liquidity Provider(s). This framework is intended to ensure you receive real market execution on your trades, while simultaneously allowing us to manage risk dynamically by routing existing positions or future orders to third parties for execution as we deem appropriate. We believe that such real market execution and dynamic risk management would not be possible or as cost-effective if trades were executed in simulated accounts. Regardless of whether we act as counterparty to your trades, the gain or loss on your funded account is not calculated differently. However, when we act as the counterparty to your trades, there is an inherent potential conflict of interest because your trades do not result in net gain or loss to us, as your trades would if we were not the direct counterparty.  '},
      {question: 'Am I subject to any position limits? ', answer:'The maximum position that you may open is determined by your available margin.  We reserve the right to increase the margin requirement, amend the leverage ratio limits, or limit the number of open positions you may enter or maintain in a Funded Account at any time, without prior notice, and to revise, in response to market conditions, the drawdown levels at which trading in the funded account will be halted. We or the Liquidity Provider reserve the right to refuse to accept any order.'},
      {question:'What are the rules for the funded account?', answer:'The rules for the funded account are exactly the same as your Assessment account. However, with a funded account, there is no profit target. '},
      {question:'If I have a breach in my funded account and there are gains in the account, do I forfeit those gains?', answer:'If you have gains in your funded account at the time of a breach, you will still receive your portion of those gains.'},
      {question:'How do I withdraw the gains in my funded account?', answer:'Traders can request a withdrawal of the gains in their funded account at any time in their trader dashboard, but no more frequently than once per thirty (30) days. So, if you make gain in your funded account, you can request a withdrawal. When you are ready to withdraw the gains from your funded account, click the Withdraw Profits button in your trader dashboard and enter the amount to withdraw. All such gains are distributed via the available outbound payment solutions offered from time to time. Once your withdrawal request is approved, we will pay the monies owed to you. We reserve the right to change the withdrawal methods and options at any time.'},
      {question:'When can I withdraw the gains in my funded account and how does that affect my Maximum Drawdown?', answer:'Your first withdrawal can be requested at any time, subject to the profit split stated in the Trader Agreement. Thereafter, you can request a withdrawal of the gains in your account every 30 days. When a withdrawal is approved, we will also withdraw our share of the gains. The drawdown does not reset when you request a withdrawal. Example: You have taken an account from $100,000 to $120,000. You then request a withdrawal of $16,000 where the profit split is 90/10. In this scenario, you will receive $14,400 and we would retain $1,600. This would also take the balance of the account down to $104,000, and your Maximum Drawdown will remain$94,000. So, you would have $10,000 maximum you could lose on the account before it would violate the Maximum Drawdown rule. If you take a full withdrawal of the gains in your Funded Account, the Maximum Drawdown will still remain at $94,000.'}
    ],
    '2-step': [
      { question: 'How long does it take to receive my funded account?', answer: 'Upon passing your Assessment, you will receive an email with instructions on how to access and complete both your “Know Your Customer” verification and your “Trader Agreement”. Once both are completed your Funded Account will be created, funded and issued to you typically within 24-48 business hours. You will receive a confirmation email once this account is being enabled.' },
      { question: 'Once I pass the Assessment am I provided with a demo or funded account? ', answer: 'Once you pass the Assessment, we provide you with a funded account, backed by our capital. The capital in your funded Account is notional and may not match the amount of capital on deposit with the Liquidity Provider. A Funded Account is notionally funded when actual funds in the account (i.e., the equity in a Funded Account represented by the amount of capital) differs from the nominal account size (i.e., the size of the Funded Account that establishes the initial account value and level of trading). Notional funds are the difference between nominal account size and actual capital in a Funded Account. Use of notional funding does not impact your trading conditions in any way. ' },
      { question: 'Do we manipulate the pricing or executions you receive in your funded account?', answer:'For purposes of managing risk and minimizing transaction costs, we may offset or negate market risk and act as the direct counterparty to certain trades initiated in the Account. Such trades are executed at prices provided by the Liquidity Provider(s). This framework is intended to ensure you receive real market execution on your trades, while simultaneously allowing us to manage risk dynamically by routing existing positions or future orders to third parties for execution as we deem appropriate. We believe that such real market execution and dynamic risk management would not be possible or as cost-effective if trades were executed in simulated accounts. Regardless of whether we act as counterparty to your trades, the gain or loss on your funded account is not calculated differently. However, when we act as the counterparty to your trades, there is an inherent potential conflict of interest because your trades do not result in net gain or loss to us, as your trades would if we were not the direct counterparty.'},
      {question: 'Am I subject to any position limits?', answer:'The maximum position that you may open is determined by your available margin.  We reserve the right to increase the margin requirement, amend the leverage ratio limits, or limit the number of open positions you may enter or maintain in a Funded Account at any time, without prior notice, and to revise, in response to market conditions, the drawdown levels at which trading in the funded account will be halted. We or the Liquidity Provider reserve the right to refuse to accept any order.'},
      {question: 'What are the rules for the funded account?', answer:'The rules for the funded account are exactly the same as your Assessment account. However, with a funded account, there is no profit target. '},
      {question: 'If I have a breach in my funded account and there are gains in the account, do I forfeit those gains?', answer:'If you have gains in your funded account at the time of a breach, you will still receive your portion of those gains. '},
      {question:'How do I withdraw the gains in my funded account?', answer:'Traders can request a withdrawal of the gains in their funded account at any time in their trader dashboard, but no more frequently than once per thirty (30) days. So, if you make gain in your funded account, you can request a withdrawal. When you are ready to withdraw the gains from your funded account, click the Withdraw Profits button in your trader dashboard and enter the amount to withdraw. All such gains are distributed via the available outbound payment solutions offered from time to time. Once your withdrawal request is approved, we will pay the monies owed to you. We reserve the right to change the withdrawal methods and options at any time.'},
      {question:'When can I withdraw the gains in my funded account and how does that affect my Maximum Drawdown?', answer:'Your first withdrawal can be requested at any time, subject to the profit split stated in the Trader Agreement. Thereafter, you can request a withdrawal of the gains in your account every 30 days. When a withdrawal is approved, we will also withdraw our share of the gains. The drawdown does not reset when you request a withdrawal. Example: You have taken an account from $100,000 to $120,000. You then request a withdrawal of $16,000 where the profit split is 90/10. In this scenario, you will receive $14,400 and we would retain $1,600.  This would also take the balance of the account down to $104,000, and your Maximum Drawdown will remain$94,000. So, you would have $10,000 maximum you could lose on the account before it would violate the Maximum Drawdown rule. If you take a full withdrawal of the gains in your Funded Account, the Maximum Drawdown will still remain at $94,000.'}
    ],
  };
  isArray(val: any): val is any[] {
    return Array.isArray(val);
  }
  
  activeIndex: number | null = null;

  toggleAnswer(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }

  selectEvaluation(type: '1-step' | '2-step') {
    this.evaluationType = type;
    this.activeIndex = null; 
  }
}
