import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import HeaderBox from '@/components/ui/HeaderBox'
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

const Home = async () => {
  const loggedIn = await getLoggedInUser();
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          {/* Header Box */}
          <HeaderBox 
          type="greeting"
          title="welcome"
          user={loggedIn?.name || 'Guest'}
          subtext="Access and manage your account and transactions efficiently."
          />


          {/* Balance Box */}
          <TotalBalanceBox 
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250.35}
          />
        </header>


        RECENT TRANSACTIONS
      </div>

      {/* RightBar Section */}
      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 15000 }, { currentBalance: 35000 }]}
      />
    </section>

    
  )
}

export default Home