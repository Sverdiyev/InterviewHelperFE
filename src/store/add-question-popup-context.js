const { usePopup } = require('../services/usePopup.js');

const [AddQuestionCtx, AddQuestionPopupCtxProvider] = usePopup();

export { AddQuestionPopupCtxProvider };

export default AddQuestionCtx;
