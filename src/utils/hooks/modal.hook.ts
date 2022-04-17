import { useCallback } from 'react';

import { useAppSelector, useAppDispatch } from '@/utils/hooks/redux.hooks';
import { showModal, hideModal } from '@/store/features/modal.slice';

export const useModal = () => {
  const { isVisible } = useAppSelector((state) => state.modal);

  const dispatch = useAppDispatch();

  const handleShow = useCallback(() => {
    dispatch(showModal());
  }, [dispatch]);

  const handleHide = useCallback(() => {
    dispatch(hideModal());
  }, [dispatch]);

  return { isVisible, handleShow, handleHide };
};
