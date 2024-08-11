import React, { useState } from 'react';

interface Transaction {
  id: string;
  amount: number;
  timestamp: string;
}

interface MemecoinTrackerProps {}

const MemecoinTracker: React.FC<MemecoinTrackerProps> = () => {
  const [balance, setBalance] = useState(1000);
  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: '1', amount: 100, timestamp: '2023-02-20T14:30:00' },
    { id: '2', amount: -50, timestamp: '2023-02-21T10:00:00' },
    { id: '3', amount: 200, timestamp: '2023-02-22T12:00:00' },
  ]);

  const handleTransaction = (amount: number) => {
    setBalance((prevBalance) => prevBalance + amount);
    setTransactions((prevTransactions) => [
      ...prevTransactions,
      { id: `${prevTransactions.length + 1}`, amount, timestamp: new Date().toISOString() },
    ]);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-md shadow-md">
      <h1 className="text-3xl font-bold mb-4">Memecoin Tracker</h1>
      <p className="text-lg font-bold mb-2">Balance: {balance} MEME</p>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4"
        onClick={() => handleTransaction(100)}
      >
        Receive 100 MEME
      </button>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-4"
        onClick={() => handleTransaction(-100)}
      >
        Send 100 MEME
      </button>
      <h2 className="text-2xl font-bold mb-2">Transaction History</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id} className="flex justify-between mb-2">
            <span>
              {transaction.amount > 0 ? 'Received' : 'Sent'} {Math.abs(transaction.amount)} MEME
            </span>
            <span className="text-gray-500">{transaction.timestamp}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MemecoinTracker;