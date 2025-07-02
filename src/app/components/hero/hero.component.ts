import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SelectPlanComponent } from '../select-plan/select-plan.component';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, SelectPlanComponent],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  name = '';
  email = '';
  message = '';
  selectPlanComponent: any;
  isModalVisible = false;
  isPopupVisible = false;
  selectedApp: 'telegram' | 'whatsapp' | null = null;

  marketType: 'crypto' | 'instant' | 'fxced' = 'crypto';
  evaluationType: '1-step' | '2-step' = '1-step';

  accountSizes = ['$5,000', '$10,000', '$25,000', '$50,000', '$100,000', '$200000'];

  plans: {
    crypto: { '1-step': any[]; '2-step': any[] };
    instant: { '1-step': any[]; '2-step': any[] };
    fxced: { '1-step': any[]; '2-step': any[] };
  } = {
    crypto: {
      '1-step': [
        { label: 'Target', values: ['9%', '9%', '9%', '9%', '9%', '9%'] },
        { label: 'Profit share Percentage', values: ['Up to 90%', 'Up to 90%', 'Up to 90%', 'Up to 90%', 'Up to 90%', 'Up to 90%'] },
        { label: 'Max. Drawdown', values: ['6%<br>Static', '6%<br>Static', '6%<br>Static', '6%<br>Static', '6%<br>Static', '6%<br>Static'] },
        {
          label: 'Leverage',
          values: [
            'BTC, ETH-5:1<br>for other-2:1',
            'BTC, ETH-5:1<br>for other-2:1',
            'BTC, ETH-5:1<br>for other-2:1',
            'BTC, ETH-5:1<br>for other-2:1',
            'BTC, ETH-5:1<br>for other-2:1',
            'BTC, ETH-5:1<br>for other-2:1'
          ]
        },
        { label: 'Inactivity Period', values: ['30 Days', '30 Days', '30 Days', '30 Days', '30 Days', '30 Days'] },
        { label: 'Evaluation fee', values: ['$45', '$95', '$250', '$525', '$1050', '$2150'], isFee: true }
      ],
      '2-step': [
        { label: 'Target', values: ['Phase 1-6%<br>Phase 2-9%', 'Phase 1-6%<br>Phase 2-9%', 'Phase 1-6%<br>Phase 2-9%', 'Phase 1-6%<br>Phase 2-9%', 'Phase 1-6%<br>Phase 2-9%', 'Phase 1-6%<br>Phase 2-9%'] },
        { label: 'Profit share Percentage', values: ['Up to 90%', 'Up to 90%', 'Up to 90%', 'Up to 90%', 'Up to 90%', 'Up to 90%'] },
        { label: 'Max. Drawdown', values: ['9%<br>Static', '9%<br>Static', '9%<br>Static', '9%<br>Static', '9%<br>Static', '9%<br>Static'] },
        {
          label: 'Leverage',
          values: [
            'BTC, ETH-5:1<br>for other-2:1',
            'BTC, ETH-5:1<br>for other-2:1',
            'BTC, ETH-5:1<br>for other-2:1',
            'BTC, ETH-5:1<br>for other-2:1',
            'BTC, ETH-5:1<br>for other-2:1',
            'BTC, ETH-5:1<br>for other-2:1'
          ]
        },
        { label: 'Inactivity Period', values: ['30 Days', '30 Days', '30 Days', '30 Days', '30 Days', '30 Days'] },
        { label: 'Evaluation fee', values: ['$35', '$80', '$210', '$430', '$900', '$2000'], isFee: true }
      ]
    },
    instant: {
      '1-step': [
        { label: 'Target', values: ['-', '-', '-', '-', '-'] },
        { label: 'Profit share Percentage', values: ['90%', '90%', '90%', '90%', '90%'] },
        { label: 'Max. Drawdown', values: ['8% Trailing', '8% Trailing', '8% Trailing', '8% Trailing', '8% Trailing'] },
        { label: 'Daily Loss Limit', values: ['5%', '5%', '5%', '5%', '5%'] },
        { label: 'Leverage', values: ['50:1', '50:1', '50:1', '50:1', '50:1'] },
        { label: 'Inactivity Period', values: ['30 Days', '30 Days', '30 Days', '30 Days', '30 Days'] },
        { label: 'Evaluation fee', values: ['$200', '$400', '$1125', '$2500', '$5000'], isFee: true }
      ],
      '2-step': [
        { label: 'Target', values: ['-', '-', '-', '-', '-', '-'] },
        { label: 'Profit share Percentage', values: ['80%', '80%', '80%', '80%', '80%', '80%'] },
        { label: 'Max. Drawdown', values: ['8%', '8%', '8%', '8%', '8%', '8%'] },
        { label: 'Daily Loss Limit', values: ['5%', '5%', '5%', '5%', '5%', '5%'] },
        { label: 'Leverage', values: ['50:1', '50:1', '50:1', '50:1', '50:1', '50:1'] },
        { label: 'Inactivity Period', values: ['30 Days', '30 Days', '30 Days', '30 Days', '30 Days', '30 Days'] },
        { label: 'Evaluation fee', values: ['$25', '$50', '$125', '$225', '$450', '$450'], isFee: true }
      ]
    },
    fxced: {
      '1-step': [
        { label: 'Target', values: ['10%', '10%', '10%', '10%'] },
        { label: 'Profit share Percentage', values: ['80%', '80%', '80%', '80%'] },
        { label: 'Max. Drawdown', values: ['6% Static', '6% Static', '6% Static', '6% Static'] },
        { label: 'Daily Loss Limit', values: ['5%', '5%', '5%', '5%'] },
        { label: 'Leverage', values: ['1:50', '1:50', '1:50', '1:50'] },
        { label: 'Inactivity Period', values: ['30 Days', '30 Days', '30 Days', '30 Days'] },
        { label: 'Evaluation fee', values: ['$35', '$75', '$190', '$375'], isFee: true }
      ],
      '2-step': [
        { label: 'Target', values: ['Phase 1-8% <br> Phase 2-5%', 'Phase 1-8% <br> Phase 2-5%', 'Phase 1-8% <br> Phase 2-5%', 'Phase 1-8% <br> Phase 2-5%', 'Phase 1-8% <br> Phase 2-5%'] },
        { label: 'Profit share Percentage', values: ['80%', '80%', '80%', '80%', '80%'] },
        { label: 'Max. Drawdown', values: ['8% Static', '8% Static', '8% Static', '8% Static', '8% Static'] },
        { label: 'Daily Loss Limit', values: ['5%', '5%', '5%', '5%', '5%'] },
        { label: 'Leverage', values: ['1:50', '1:50', '1:50', '1:50', '1:50'] },
        { label: 'Inactivity Period', values: ['30 Days', '30 Days', '30 Days', '30 Days', '30 Days'] },
        { label: 'Evaluation fee', values: ['$25', '$50', '$125', '$275', '$450'], isFee: true }
      ]
    }
  };

  faqs: {
    crypto: { '1-step': any[]; '2-step': any[] };
    instant: { '1-step': any[]; '2-step': any[] };
    fxced: { '1-step': any[]; '2-step': any[] };
  } = {
    crypto: {
      '1-step': [{question:'What constitutes a Breach? ', answer:'A breach means that you violated the Max Drawdown rule. In the event you have a breach, you will fail the Assessment or have your Funded Account taken away.'},
                {question:'How do you calculate the 3% Daily Cap Limit?', answer:'The Daily Cap Limit is the maximum percentage of your starting balance that your crypto account can move in any given day. The Daily Cap Limit is calculated using the previous day’s equity, which resets at 5 PM EST. In the event that the assets in your account move in excess of 3% of your starting balance from your previous days equity in either direction, your positions will be closed out and your account will be locked until the start of the new trading day at 5 PM EST.  Example: For a 100k starting balance account, with a 3% Daily Cap. If the account finishes the day, with Equity at 101k, the next day’s limits will be 101k +/- 3k (i.e. 98k - 104k).'},
                {question:'How do you calculate the Maximum Drawdown?',answer:'The Maximum Drawdown is initially set at 6% and is static and will therefore remain at the same value for as long as the account will remain active.'},
                {question:'Can I hold positions over the weekend? ',answer:'Yes'},
                {question:'Is there a breach for inactivity? ',answer:'Yes. We will consider you inactive and your account will be breached if you do not have any trading activity on your account for 30 consecutive days.'},
                {question:'How long does it take to receive my funded account?', answer:'Upon passing your Assessment, you will receive an email with instructions on how to access and complete both your “Know Your Customer” verification and your “Trader Agreement”. Once both are completed your Funded Account will be created, funded and issued to you typically within 24-48 business hours. You will receive a confirmation email once this account is being enabled.'},
                {question:'Once I pass the Assessment am I provided with a demo or funded account?',answer:'Once you pass the Assessment, we provide you with a funded account, backed by our capital. The capital in your funded Account is notional and may not match the amount of capital on deposit with the Liquidity Provider'},
                {question:'Do we manipulate the pricing or executions you receive in your funded account?',answer:'No. We do not have any control over pricing from the liquidity provider or on the executions on your trades.'},
                {question:'Who is the counterparty to my trades?',answer:'For purposes of managing risk and minimizing transaction costs, we may offset or negate market risk and act as the direct counterparty to certain trades initiated in the Account. Such trades are executed at prices provided by the Liquidity Provider(s). This framework is intended to ensure you receive real market execution on your trades, while simultaneously allowing us to manage risk dynamically by routing existing positions or future orders to third parties for execution as we deem appropriate. We believe that such real market execution and dynamic risk management would not be possible or as cost-effective if trades were executed in simulated accounts. Regardless of whether we act as counterparty to your trades, the gain or loss on your funded account is not calculated differently. However, when we act as the counterparty to your trades, there is an inherent potential conflict of interest because your trades do not result in net gain or loss to us, as your trades would if we were not the direct counterparty.'},
                {question:'Am I subject to any position limits?', answer:'The maximum position that you may open is determined by your available margin.  We reserve the right to increase the margin requirement, amend the leverage ratio limits, or limit the number of open positions you may enter or maintain in a Funded Account at any time, without prior notice, and to revise, in response to market conditions, the drawdown levels at which trading in the funded account will be halted. We or the Liquidity Provider reserve the right to refuse to accept any order.'},
                {question:'What are the rules for the funded account?',answer:'The rules for the funded account are exactly the same as your Assessment account. However, with a funded account, there is no profit target.'},
                {question:'If I have a breach in my funded account and there are gains in the account, do I forfeit those gains?', answer:'If you have gains in your funded account at the time of a breach, you will still receive your portion of those gains.'},
                {question:'How do I withdraw the gains in my funded account?',answer:'Traders can request a withdrawal of the gains in their funded account at any time in their trader dashboard, but no more frequently than once per thirty (30) days. So, if you make gain in your funded account, you can request a withdrawal. When you are ready to withdraw the gains from your funded account, click the Withdraw Profits button in your trader dashboard and enter the amount to withdraw. All such gains are distributed via the available outbound payment solutions offered from time to time. Once your withdrawal request is approved, we will pay the monies owed to you. We reserve the right to change the withdrawal methods and options at any time.'},
                {question:'When can I withdraw the gains in my funded account and how does that affect my Maximum Drawdown?',answer:'Your first withdrawal can be requested at any time, subject to the profit split stated in the Trader Agreement. Thereafter, you can request a withdrawal of the gains in your account every 30 days. When a withdrawal is approved, we will also withdraw our share of the gains. The drawdown does not reset when you request a withdrawal. Example: You have taken an account from $100,000 to $120,000. You then request a withdrawal of $16,000 where the profit split is 90/10. In this scenario, you will receive $14,400 and we would retain $1,600. This would also take the balance of the account down to $104,000, and your Maximum Drawdown will remain$94,000. So, you would have $10,000 maximum you could lose on the account before it would violate the Maximum Drawdown rule. If you take a full withdrawal of the gains in your Funded Account, the Maximum Drawdown will still remain at $94,000.'}],
      '2-step': [{question:'What constitutes a Breach?',answer:'What constitutes a Breach?'},
                {question:'How do you calculate the 3% Daily Cap Limit?',answer:'The Daily Cap Limit is the maximum percentage of your starting balance that your crypto account can move in any given day. The Daily Cap Limit is calculated using the previous day’s equity, which resets at 5 PM EST. In the event that the assets in your account move in excess of 3% of your starting balance from your previous days equity in either direction, your positions will be closed out and your account will be locked until the start of the new trading day at 5 PM EST.'},
                {question:'How do you calculate the Maximum Drawdown?',answer:'The Maximum Drawdown is initially set at 9% and is static and will therefore remain at the same value for as long as the account will remain active.'},
                {question:'Can I hold positions over the weekend?',answer:'Yes'},
                {question:'Is there a breach for inactivity?', answer:'Yes. We will consider you inactive and your account will be breached if you do not have any trading activity on your account for 30 consecutive days.'},
                {question:'How long does it take to receive my funded account?',answer:'Upon passing your Assessment, you will receive an email with instructions on how to access and complete both your “Know Your Customer” verification and your “Trader Agreement”. Once both are completed your Funded Account will be created, funded and issued to you typically within 24-48 business hours. You will receive a confirmation email once this account is being enabled.'},
                {question:'Once I pass the Assessment am I provided with a demo or funded account?', answer:'Once you pass the Assessment, we provide you with a funded account, backed by our capital. The capital in your funded Account is notional and may not match the amount of capital on deposit with the Liquidity Provider. A Funded Account is notionally funded when actual funds in the account (i.e., the equity in a Funded Account represented by the amount of capital) differs from the nominal account size (i.e., the size of the Funded Account that establishes the initial account value and level of trading). Notional funds are the difference between nominal account size and actual capital in a Funded Account.'},
                {question:'Do we manipulate the pricing or executions you receive in your funded account?',answer:'No. We do not have any control over pricing from the liquidity provider or on the executions on your trades.'},
                {question:'Who is the counterparty to my trades?',answer:'For purposes of managing risk and minimizing transaction costs, we may offset or negate market risk and act as the direct counterparty to certain trades initiated in the Account. Such trades are executed at prices provided by the Liquidity Provider(s). This framework is intended to ensure you receive real market execution on your trades, while simultaneously allowing us to manage risk dynamically by routing existing positions or future orders to third parties for execution as we deem appropriate. We believe that such real market execution and dynamic risk management would not be possible or as cost-effective if trades were executed in simulated accounts. Regardless of whether we act as counterparty to your trades, the gain or loss on your funded account is not calculated differently. However, when we act as the counterparty to your trades, there is an inherent potential conflict of interest because your trades do not result in net gain or loss to us, as your trades would if we were not the direct counterparty.'},
                {question:'Am I subject to any position limits?', answer:'The maximum position that you may open is determined by your available margin.  We reserve the right to increase the margin requirement, amend the leverage ratio limits, or limit the number of open positions you may enter or maintain in a Funded Account at any time, without prior notice, and to revise, in response to market conditions, the drawdown levels at which trading in the funded account will be halted. We or the Liquidity Provider reserve the right to refuse to accept any order.'},
                {question:'What are the rules for the funded account?', answer:'The rules for the funded account are exactly the same as your Assessment account. However, with a funded account, there is no profit target.'},
                {question:'If I have a breach in my funded account and there are gains in the account, do I forfeit those gains?',answer:'If you have gains in your funded account at the time of a breach, you will still receive your portion of those gains.'},
                {question:'How do I withdraw the gains in my funded account? ',answer:'Traders can request a withdrawal of the gains in their funded account at any time in their trader dashboard, but no more frequently than once per thirty (30) days. So, if you make gain in your funded account, you can request a withdrawal. When you are ready to withdraw the gains from your funded account, click the Withdraw Profits button in your trader dashboard and enter the amount to withdraw. All such gains are distributed via the available outbound payment solutions offered from time to time. Once your withdrawal request is approved, we will pay the monies owed to you. We reserve the right to change the withdrawal methods and options at any time.'},
                {question:'When can I withdraw the gains in my funded account and how does that affect my Maximum Drawdown?', answer:'Your first withdrawal can be requested at any time, subject to the profit split stated in the Trader Agreement. Thereafter, you can request a withdrawal of the gains in your account every 30 days. When a withdrawal is approved, we will also withdraw our share of the gains. The drawdown does not reset when you request a withdrawal. Example: You have taken an account from $100,000 to $120,000. You then request a withdrawal of $16,000 where the profit split is 90/10. In this scenario, you will receive $14,400 and we would retain $1,600.  This would also take the balance of the account down to $104,000, and your Maximum Drawdown will remain$94,000. So, you would have $10,000 maximum you could lose on the account before it would violate the Maximum Drawdown rule. If you take a full withdrawal of the gains in your Funded Account, the Maximum Drawdown will still remain at $94,000.'}
      ]
    },
    instant: {
      '1-step': [{question:'What is the difference between a Hard Breach and Soft Breach rule? ', answer:' •	Soft breach means that we will close all trades that have violated the rule. However, you can continue trading in your Instant Funded Account. •	Hard breach means that you violated the Daily Loss Limit or Max Drawdown rule, or Inactivity rule. These rules constitute a hard breach. In the event you have a hard breach, you will have your Funded Account taken away.'},
                {question:'How do you calculate the Daily Loss Limit?', answer:'The Daily Loss Limit is the maximum amount your account can lose on any given day. The Daily Loss Limit is calculated using the previous day balance which resets at 5 PM EST. The Daily Loss Limit compounds with the increase in your account. Example: if your prior days end of day balance (5pm EST) was $100,000, your account would violate the daily stop loss limit if your equity reached $95,000 during the day. If your floating equity is +$5,000 on a $100,000 account, your new- day (5pm EST) daily loss is based on your balance from the previous day ($100,000). So, your daily loss limit would still be $95,000.'},
                {question:'How do you calculate the Maximum Trailing Drawdown?', answer:'The Maximum Trailing Drawdown is initially set at 8% and trails (using CLOSED BALANCE - NOT equity) your account until you have achieved a 8% return in your account. Once you have achieved an 8% return, the Maximum Trailing Drawdown no longer trails and is permanently locked in at your starting balance. Example: If your starting balance is $100,000, you can drawdown to $92,000 before you would violate the Maximum Trailing Drawdown rule. Then for example lets say you take your account to $102,000 in CLOSED BALANCE. This is your new high-water mark, which would mean your new Maximum Trailing Drawdown would be $94,000. Next, lets say you take your account to $106,000 in CLOSED BALANCE, which would be your new high-water mark. At this point your Maximum Trailing Drawdown would be locked in at your starting balance of $100,000. So, regardless of how high your account goes, you would only breach this rule if your account drew back down to $100,000 (note, you could still violate the daily drawdown). For example, if you take your account to $170,000, as long as you do not drawdown more than 5% in any given day, you would only breach if your account equity reaches $100,000.'},
                {question:'Can I hold positions over the weekend?', answer:'We require all trades to be closed by 3:45 PM EST on the last trading day of the week, typically Friday. However, in cases where markets close early or are not open on a Friday, it is the trader’s responsibility to ensure all trades are closed before the weekend based on the adjusted market schedule. Any trades left open after this time will be automatically closed. Note, this is considered a soft breach, and you will be able to continue trading once the markets reopen.'},
                {question:'What is 1 lot equal to on the Trading Platform?', answer:' ● Forex - 1 lot = $100k notional <br>● Index: 1 lot = 1 Contract <br>Exceptions: SPX500: 1 lot = 10 contracts JPN225: 1 lot = 500 contracts <br>● Cryptos: 1 lot = 1 coin<br> Silver: 1 lot = 5000 ounces <br>● Gold: 1 lot = 100 ounces<br>● Oil: 1 lot = 100 barrels'},
                {question:'Is there a breach for inactivity?', answer:'Yes. If you do not place a trade at least once every 30 days on your account, we will consider you inactive and your account will be breached. '},
                {question:'What is the Instant Funding Plan?', answer:'The Instant Funding Plan allows traders to start with a fully funded account without needing to complete an assessment phase.'},
                {question:'How Long does it take to receive my Instant Funded Account?', answer:'Upon completion of payment, we provide you with an Instant Funding account, backed by our capital.   You will receive an email with instructions on how to access this account on the platform you chose at checkout.'},
                {question:'Do I need to complete KYC or sign a trader contract to start trading in an Instant Funding Plan?', answer:'A Trading contract and KYC are both required, however, to start trading using our Instant Funding Plan, these steps won’t need to be completed until you request a withdrawal.'},
                {question:'What happens if I do not pass KYC?',answer:'If you do not pass the KYC process when requesting a withdrawal, the withdrawal will be rejected, and your account will be closed. We encourage you to ensure you can meet KYC requirements before opting for the Instant Funding Plan.'},
                {question:'Do we manipulate the pricing or executions you receive in your Instant Funded Account?',answer:'No. We operate at an arms length with the Broker. All market pricing and trade executions are provided by the Broker and are not changed or modified by us. Additionally, we do not markup transaction costs established by the Broker through adjusting bid-offer spreads, markups/markdowns, commission charges or swaps.'},
                {question:'Who is the counterparty to my trades?', answer:'For the purposes of managing risk and minimizing transaction costs, we may offset or negate market risk and act as the direct counterparty to certain trades initiated in the Account. Such trades are executed at prices provided by the Broker. This framework is intended to ensure you receive real market execution on your trades, while simultaneously allowing us to manage risk dynamically by routing existing positions or future orders to third parties for execution as we deem appropriate. We believe that such real market execution and dynamic risk management would not be possible or cost-effective if trades were executed in simulated accounts. Regardless of whether we act as counterparty to your trades, the gain or loss on your Funded Account is not calculated differently. However, when we act as the counterparty to your trades, there is an inherent potential conflict of interest because your trades do not result in net gain or loss to us, as your trades would if we were not the direct counterparty.'},
                {question:'Am I subject to any position limits?', answer:'The maximum position that you may open is determined by your available margin. We reserve the right to increase the margin requirement, limit the number of open positions you may enter or maintain in the Funded Account at any time, and to revise in response to market conditions the drawdown levels at which trading in the funded account will be halted. We or the Liquidity Provider reserve the right to refuse to accept any order.'},
                {question:'If I have a hard breach in my Funded Account and there are gains in the account, do I forfeit those gains? ', answer:'If you have gains in your Funded Account at the time of a hard breach, you will still receive your portion of those gains.'},
                {question:'How do I withdraw the gains in my Funded Account?', answer:'Traders can request a withdrawal of the profits in their funded account through their trader dashboard at any time. However, withdrawals are limited to one request every 30 days. The minimum withdrawal amount is the greater of $100 or 1% of the account]s starting balance.  When a withdrawal is approved, we will also withdraw our share of the gains, and your max trailing drawdown will lock in at your starting balance. The trailing drawdown does not reset when you request a withdrawal. '},
                {question:'If I have a hard breach in my funded account and there are gains in the account, do I forfeit those gains?',answer:'If you have gains in your funded account at the time of a hard breach, you will still receive your portion of those gains. '},
                {question:'How do I withdraw the gains in my funded account?',answer:'Traders can request a withdrawal of the gains in their funded account at any time in their trader dashboard, but no more frequently than once per thirty (30) days. So, if you make gain in your funded account, you can request a withdrawal. When you are ready to withdraw the gains from your funded account, click the Withdraw Profits button in your trader dashboard and enter the amount to withdraw. All such gains are distributed via the available outbound payment solutions offered from time to time. Once your withdrawal request is approved, we will pay the monies owed to you. We reserve the right to change the withdrawal methods and options at any time. '},
               {question:'When can I withdraw the gains in my funded account and how does that affect my Maximum Drawdown?  ',answer:'Your first withdrawal can be requested at any time, subject to an 80/20 profit split. Thereafter, you can request a withdrawal of the gains in your account every 30 days. When a withdrawal is approved, we will also withdraw our share of the gains. The drawdown does not reset when you request a withdrawal. Example: You have taken an account from $100,000 to $120,000. You then request a withdrawal of $16,000. In this scenario, you will receive $12,800 and we would retain $3,200. This would also take the balance of the account down to $104,000, and your Maximum Drawdown will remain$94,000. So, you would have $10,000 maximum you could lose on the account before it would violate the Maximum Drawdown rule. If you take a full withdrawal of the gains in your Funded Account, the Maximum Drawdown will still remain at $94,000. '}
              
              ],
      '2-step': [{question:'',answer:''},
                  {question:'', answer:''},
                  {question:'',answer:''},
                  {question:'',answer:''},
                  {question:'',answer:''},
                  {question:'',answer:''},
                  {question:'',answer:''},
                  {question:'',answer:''},
                  {question:'',answer:''}
      ]
    },
    fxced: {
      '1-step': [{question:'What is the difference between a Hard Breach and Soft Breach rule?',answer:'● Soft breach means that we will close all trades that have violated the rule. However, you can continue trading in your Assessment or Funded Account.<br> ● Hard breach means that you violated either the Daily Loss Limit or Max Drawdown rule. Both rules constitute a hard breach. In the event you have a hard breach, you will fail the Assessment or have your Funded Account taken away.'},
                 {question:'How do you calculate the Daily Loss Limit?',answer:'The Daily Loss Limit is the maximum your account can lose in any given day. Daily Loss Limit is calculated using the previous day balance which resets at 5 PM EST. The Daily Stop compounds with the increase in your account.'},
                 {question:'How do you calculate the Maximum Drawdown?',answer:'The Maximum Drawdown is initially set at 6% and is static (using CLOSED BALANCE) and will therefore remain at the same value for as long as the account will remain active.'},
                 {question:'Can I hold positions over the weekend?',answer:'Positions can be held over the weekend although only Crypto allows weekend trading'},
                 {question:'What is 1 lot equal to on the Trading Platform?', answer:' Forex: 1 lot = $100k notional <br>● Index: 1 lot = 1 Contract <br>Exceptions: SPX500: 1 lot = 10 contracts JPN225: 1 lot = 500 contracts <br>● Cryptos: 1 lot = 1 coin  <br>● Silver: 1 lot = 5000 ounces  <br>● Gold: 1 lot = 100 ounces  <br>● Oil: 1 lot = 100 barrels'},
                 {question:'Is there a breach for inactivity?',answer:'Yes. We will consider you inactive and your account will be breached if you do not have any trading activity on your account for 30 consecutive days.'},
                 {question:'How long does it take to receive my funded account?',answer:'Upon passing your Assessment, you will receive an email with instructions on how to access and complete both your “Know Your Customer” verification and your “Trader Agreement”. Once both are completed and supporting documentation is provided, your Funded Account will be created, funded and issued to you typically within 24-48 business hours. You will receive a confirmation email once this account is being enabled.'},
                 {question:'Once I pass the Assessment am I provided with a demo or funded account?',answer:'Once you pass the Assessment, we provide you with a funded account, backed by our capital. The capital in your funded Account is notional and may not match the amount of capital on deposit with the Liquidity Provider. A Funded Account is notionally funded when actual funds in the account (i.e., the equity in a Funded Account represented by the amount of capital) differs from the nominal account size (i.e., the size of the Funded Account that establishes the initial account value and level of trading). Notional funds are the difference between nominal account size and actual capital in a Funded Account.  Use of notional funding does not impact your trading conditions in any way. '},
                 {question:'Do we manipulate the pricing or executions you receive in your funded account?',answer:'No. We do not have any control over pricing from the liquidity provider or on the executions on your trades. '},
                 {question:'Who is the counterparty to my trades?',answer:'For purposes of managing risk and minimizing transaction costs, we may offset or negate market risk and act as the direct counterparty to certain trades initiated in the Account. Such trades are executed at prices provided by arm’s length third parties. This framework is intended to ensure you receive real market execution on your trades, while simultaneously allowing us to manage risk dynamically by routing existing positions or future orders to third parties for execution as we deem appropriate. We believe that such real market execution and dynamic risk management would not be possible or as cost effective if trades were executed in simulated accounts. Regardless of whether we act as counterparty to your trades, the gain or loss on your funded account is not calculated differently. However, when we act as the counterparty to your trades, there is an inherent potential conflict of interest because your trades do not result in net gain or loss to us, as your trades would if we were not the direct counterparty.'},
                 {question:'Am I subject to any position limits?',answer:'The maximum position that you may open is determined by your available margin.  We reserve the right to increase the margin requirement, limit the number of open positions you may enter or maintain in the Funded Account at any time, and to revise in response to market conditions the drawdown levels at which trading in the funded account will be halted. We or the Liquidity Provider reserve the right to refuse to accept any order.'},
                 {question:'What are the rules for the funded account?',answer:'The rules for the funded account are exactly the same as your Assessment account. However, with a funded account, there is no profit target. '},
      ],
      '2-step': [{question:'What is the difference between a Hard Breach and Soft Breach rule?',answer:'● Soft breach means that we will close all trades that have violated the rule. However, you can continue trading in your Assessment or Funded Account.<br> ● Hard breach means that you violated either the Daily Loss Limit or Max Drawdown rule. Both rules constitute a hard breach. In the event you have a hard breach, you will fail the Assessment or have your Funded Account taken away.'},
                {question:'How do you calculate the Daily Loss Limit? ',answer:'The Daily Loss Limit is the maximum your account can lose in any given day. Daily Loss Limit is calculated using the previous day balance which resets at 5 PM EST. Daily Stop compounds with the increase in your account.  '},
                  {question:'How do you calculate the Max Drawdown?', answer:'Maximum drawdown is the maximum your account can drawdown before you would hard breach your account. When you open the account, your Maximum Drawdown is set at 8% of your starting balance. This 8% is static and does not trail.  '},
                  {question:'Can I hold positions over the weekend?',answer:'Positions can be held over the weekend although only Crypto allows weekend trading'},
                  {question:'What is 1 lot equal to on the Trading Platform? ',answer:' ●Forex - 1 lot = $100k notional <br> ● Index - 1 lot = 1 Contracts Exceptions: SPX500: 1 lot = 10 contracts JPN225: 1 lot = 500 contracts <br>● Cryptos - 1 lot = 1 coin <br> ● Silver - 1 lot = 5000 ounces <br> ● Gold - 1 lot = 100 ounces <br>● Oil - 1 lot = 100 barrels '},
                  {question:'Is there a breach for inactivity? ',answer:'Yes. We will consider you inactive and your account will be breached if you do not have any trading activity on your account for 30 consecutive days. '},
                  {question:'How Long does it take to receive my funded account?',answer:'Upon passing your Assessment, you will receive an email with instructions on how to access and complete both your “Know Your Customer” verification and your “Trader Agreement”. Once both are completed and supporting documentation is provided, your Funded Account will be created, funded and issued to you typically within 24-48 business hours. You will receive a confirmation email once this account is being enabled.'},
                  {question:'Once I pass the Assessment am I provided with a demo or funded account? ',answer:'Once you pass the Assessment, we provide you with a funded account, backed by our capital. The capital in your funded Account is notional and may not match the amount of capital on deposit with the Liquidity Provider. A Funded Account is notionally funded when actual funds in the account (i.e., the equity in a Funded Account represented by the amount of capital) differs from the nominal account size (i.e., the size of the Funded Account that establishes the initial account value and level of trading). Notional funds are the difference between nominal account size and actual capital in a funded account. '},
                  {question:'Do we manipulate the pricing or executions you receive in your Funded Account? ',answer:'No. We do not have any control over pricing from the liquidity provider or on the executions on your trades. '},
                  {question:'Who is the counterparty to my trades? ',answer:'For purposes of managing risk and minimizing transaction costs, we may offset or negate market risk and act as the direct counterparty to certain trades initiated in the Account. Such trades are executed at prices provided by arm’s length third parties. This framework is intended to ensure you receive real market execution on your trades, while simultaneously allowing us to manage risk dynamically by routing existing positions or future orders to third parties for execution as we deem appropriate. We believe that such real market execution and dynamic risk management would not be possible or as cost-effective if trades were executed in simulated accounts. Regardless of whether we act as counterparty to your trades, the gain or loss on your funded account is not calculated differently. However, when we act as the counterparty to your trades, there is an inherent potential conflict of interest because your trades do not result in net gain or loss to us, as your trades would if we were not the direct counterparty. '},
                  {question:'Am I subject to any position limits?  ',answer:'The maximum position that you may open is determined by your available margin.  We reserve the right to increase the margin requirement, limit the number of open positions you may enter or maintain in the Funded Account at any time, and to revise in response to market conditions the drawdown levels at which trading in the funded account will be halted. We or the Liquidity Provider reserve the right to refuse to accept any order.  '},
                  {question:'What are the rules for the funded account? ',answer:'The rules for the funded account are exactly the same as your Assessment account. However, with a funded account, there is no profit target. '},
                 {question:'If I have a hard breach in my funded account and there are gains in the account, do I forfeit those gains?  ',answer:'If you have gains in your funded account at the time of a hard breach, you will still receive your portion of those gains.  '},
                 {question:'How do I withdraw the gains in my funded account? ',answer:'Traders can request a withdrawal of the gains in their funded account at any time in their trader dashboard, but no more frequently than once per thirty (30) days. So, if you make gain in your funded account, you can request a withdrawal. When you are ready to withdraw the gains from your funded account, click the Withdraw Profits button in your trader dashboard and enter the amount to withdraw. All such gains are distributed via the available outbound payment solutions offered from time to time. Once your withdrawal request is approved, we will pay the monies owed to you. We reserve the right to change the withdrawal methods and options at any time.'},
                  {question:'When can I withdraw the gains in my funded account and how does that affect my Maximum Drawdown? ',answer:'Your first withdrawal can be requested at any time, subject to an 80/20 profit split. Thereafter, you can request a withdrawal of the gains in your account every 30 days. When a withdrawal is approved, we will also withdraw our share of the gains. The drawdown does not reset when you request a withdrawal. Example: You have taken an account from $100,000 to $120,000. You then request a withdrawal of $16,000. In this scenario, you will receive $12,800 and we would retain $3,200. This would also take the balance of the account down to $104,000, and your Maximum Drawdown will remain$92,000. So, you would have $12,000 maximum you could lose on the account before it would violate the Maximum Drawdown rule. If you take a full withdrawal of the gains in your Funded Account, the Maximum Drawdown will still remain at $92,000. '}]
    }
  };

  isArray(val: any): val is any[] {
    return Array.isArray(val);
  }

  activeIndex: number | null = null;

  toggleAnswer(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }

  selectEvaluation(type: '1-step' | '2-step') {
    if (this.marketType !== 'instant') {
      this.evaluationType = type;
    }
    this.updateAccountSizes();
  }

  selectMarket(type: 'crypto' | 'instant' | 'fxced') {
    this.marketType = type;
    this.evaluationType = '1-step'; 
    // Default
    this.updateAccountSizes();
  }

  getTableWrapperClass() {
    return this.marketType === 'instant' ? 'instant-funding' : '';
  }

  updateAccountSizes(): void {
    if (this.marketType === 'crypto') {
      this.accountSizes = ['$5,000', '$10,000', '$25,000', '$50,000', '$100,000', '$200000'];
    } else if (this.marketType === 'fxced' && this.evaluationType === '1-step') {
      this.accountSizes = ['$5,000', '$10,000', '$25,000', '$50,000'];
    } else if (this.marketType === 'fxced' && this.evaluationType === '2-step') {
      this.accountSizes = ['$5,000', '$10,000', '$25,000', '$50,000', '$100,000'];
    } else if (this.marketType === 'instant') {
      this.accountSizes = ['$5,000', '$10,000', '$25,000', '$50,000', '$100,000'];
    }
  }

  getEvaluationClass(): string {
    return this.marketType === 'instant' ? '' : (this.evaluationType === '2-step' ? 'two-step' : 'one-step');
  }

  get currentFaqs() {
    return this.faqs?.[this.marketType]?.[this.evaluationType] || [];
  }

  getFee(accountSize: string): string | undefined {
    const index = this.accountSizes.indexOf(accountSize);
    const plan = this.plans[this.marketType]?.[this.evaluationType];
    if (!plan || index === -1 || index >= plan[plan.length - 1].values.length) return 'Fee not available';
    return plan[plan.length - 1]?.values[index];
  }

  openChatPopup(app: 'telegram' | 'whatsapp') {
    this.selectedApp = app;
    this.isPopupVisible = true;
  }

  closePopup() {
    this.isPopupVisible = false;
    this.selectedApp = null;
  }

  startChat() {
    if (this.selectedApp === 'telegram') {
      window.open('https://t.me/PropTrade0', '_blank');
    } else if (this.selectedApp === 'whatsapp') {
      window.open('https://wa.me/+37441070914', '_blank');
    }
    this.closePopup();
  }

  openPlanModal() {
    this.isModalVisible = true;
  }

  sendEmail(event: Event) {
    event.preventDefault();
    emailjs.send(
      'service_wbkesl9',
      'template_r3hwpfe',
      {
        name: this.name,
        email: this.email,
        message: this.message
      },
      'Knk3py6B3XzgPjjOE'
    ).then(() => {
      this.name = '';
      this.email = '';
      this.message = '';
    }, (error) => {
      console.error(error);
    });
  }
}
