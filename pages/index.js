import ExpenseTable from "@/components/expenseTable"
import useGetExpenses from "@/hooks/useGetExpenses"
export default function Home() {

  const {expenses} = useGetExpenses()

  return (
    <div>
      <h1>Home</h1>
      <ExpenseTable expenses={expenses} />
    </div>
  )
}