import { Link } from "react-router-dom";
import PZ from '../../images/svgs/PZ.svg'
import Username from '../user/Username'

function CartOverview() {
  return (
    <div>
      <Link to="/cart" className="cart">
        <div className="cart group transition-all flex flex-col justify-center items-center
         bg-emerald-600 rounded-xl mx-4 w-24 text-sm overflow-hidden border-2 border-yellow-500">
          <div className="cart-up inline-flex items-center justify-center  w-24 py-1 text-center">
            <Username />
          </div>
          <div className="cart-down py-1 flex items-center justify-center gap-1 bg-emerald-500 w-24 text-center">
            <span className="font-semibold text-slate-50">2</span>
            <div className="relative h-4 w-4">
              <img className="PZ absolute pointer-events-none" src={PZ} />
            </div>
            <span className="pizza-price text-slate-50 font-semibold">€16,00</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CartOverview;
