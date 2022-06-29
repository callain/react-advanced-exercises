import Card from '../components/card';
import Stat from '../components/stat';
import * as Icons from '@heroicons/react/outline';

export default function Home() {
  return (
    <>
      <h3 className='mt-2 mb-5 text-lg font-medium leading-6 text-slate-900'>
        Your accounts
      </h3>

      <div className='grid grid-cols-1 gap-5'>
        <Card>
          <Stat
            label='Checking'
            endpoint='/api/checking'
            Icon={Icons.CashIcon}
          />
        </Card>

        <Card>
          <Stat
            label='Savings'
            endpoint='/api/savings'
            Icon={Icons.CurrencyDollarIcon}
          />
        </Card>

        <Card>
          <Stat
            label='Credit Card'
            endpoint='/api/credit'
            Icon={Icons.CreditCardIcon}
          />
        </Card>
      </div>
    </>
  );
}
