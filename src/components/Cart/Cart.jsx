import { useContext } from 'react';
import { useQueryClient } from 'react-query';
import CartContext from '../../store/cart-context.js';

function Cart() {
  const cartCtx = useContext(CartContext);
  const chosenQuestionsIds = cartCtx.cartQuestions;

  const queryClient = useQueryClient();
  const queryData = queryClient.getQueriesData('questionsFetch')[0];
  let allQuestions = [];
  if (queryData[1]) allQuestions = queryData[1];

  const chosenQuestions = allQuestions.filter((item) => chosenQuestionsIds.includes(item.id));

  return (
    <>
      Cart
      <div>
        {chosenQuestions.map((question) => (
          <div key={question.id + 'questionCart'}>{question.questionContent}</div>
        ))}
      </div>
    </>
  );
}

export default Cart;
