import Drawer from '@mui/material/Drawer';

function QuestionComments({ drawerOpen, setDrawerOpen, comments }) {
  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };
  return (
    <div>
      <Drawer open={drawerOpen} onClose={() => handleDrawerClose()}>
        {comments}
      </Drawer>
    </div>
  );
}

export default QuestionComments;
