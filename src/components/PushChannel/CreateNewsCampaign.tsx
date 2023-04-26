// src/components/LabelDashboard/PushChannel/CreateNewsCampaign.tsx

import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Collapse, Alert, IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import { createNewsCampaign } from '../../app/slices/newsCampaignsSlice';
import { Global, css } from '@emotion/react';
import DatePicker from './DatePicker';
import CloseIcon from '@mui/icons-material/Close';

interface CreateNewsCampaignProps {
  open: boolean;
  onClose: () => void;
}

export const CreateNewsCampaign: React.FC<CreateNewsCampaignProps> = ({ open, onClose }) => {
  const [content, setContent] = useState('');
  const [openAlert, setOpenAlert] = React.useState(false);
  const handleOpenAlert = () => setOpenAlert(true);
  const handleCloseAlert = () => setOpenAlert(false);
  const [period, setPeriod] = useState({
    from: '',
    to: '',
  });
  const dispatch = useDispatch();

  const handleEditorChange = (newContent: string) => {
    setContent(newContent);
  };

  const handleSave = () => {
    if (!period.from || !period.to) {
      handleOpenAlert();
      return;
    }
    dispatch(createNewsCampaign({
      body: content,
      date: period,
    }));
    sessionStorage.setItem('newsCampaign', content);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Create New Campaign</DialogTitle>
      <DialogContent
        sx={{
          minHeight: '400px',
          minWidth: '600px',
        }}
      >
        <Global
          styles={css`
            .tox-notifications-container {
              display: none !important;
            }
          `}
        />
        <Collapse in={openAlert}>
          <Alert
            severity="warning"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={handleCloseAlert}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            Check dates please
          </Alert>
        </Collapse>
        <DatePicker setPeriod={setPeriod} />
        <Editor
          initialValue=""
          init={{
            branding: false,
            height: 400,
            menubar: false,
            plugins:
              "print preview paste searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern",
            toolbar: "blocks | bold italic underline strikethrough | forecolor backcolor blockquote | alignleft aligncenter alignright alignjustify | numlist bullist outdent indent | removeformat",
            image_advtab: true
          }}
          onEditorChange={handleEditorChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};
