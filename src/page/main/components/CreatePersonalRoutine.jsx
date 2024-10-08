// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   setNewRoutine,
//   addRoutine,
//   updateRecurringDays,
//   updateRoutine,
//   deleteRoutine,
// } from '../../../redux/routine';
// import { ReactComponent as More } from '../../../assets/main/More.svg';
// import CreatePersonalRoutineModal from './CreatePersonalRoutineModal';

// const CreatePersonalRoutine = ({ routineData, setRoutineData }) => {
//   const dispatch = useDispatch();
//   const newRoutine = useSelector((state) => state.routine.newRoutine);

//   const [isModalOpen, setModalOpen] = useState(false);
//   const [selectedRoutine, setSelectedRoutine] = useState(null);

//   const handleDaySelection = (day) => {
//     const dayExists = newRoutine.recurringDays.some((d) => d.day === day);
//     const updatedDays = dayExists
//       ? newRoutine.recurringDays.filter((d) => d.day !== day)
//       : [...newRoutine.recurringDays, { day, success: false }];

//     dispatch(updateRecurringDays(updatedDays));
//   };

//   const handleAddRoutine = () => {
//     if (
//       newRoutine.title &&
//       newRoutine.time &&
//       newRoutine.recurringDays.length >= 2
//     ) {
//       dispatch(addRoutine(newRoutine));
//       dispatch(
//         setNewRoutine({
//           title: '',
//           time: '',
//           recurringDays: [],
//           notification: false,
//         })
//       );
//       console.log('New routine added:', newRoutine);
//     } else {
//       alert('적어도 2일 이상 선택해주세요');
//     }
//   };

//   const handleMoreClick = (routine) => {
//     setSelectedRoutine(routine);
//     setModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setModalOpen(false);
//     setSelectedRoutine(null);
//   };

//   const handleSaveRoutine = () => {
//     if (selectedRoutine) {
//       dispatch(updateRoutine(selectedRoutine));
//       handleCloseModal();
//     }
//   };

//   const handleDeleteRoutine = () => {
//     if (selectedRoutine) {
//       dispatch(deleteRoutine(selectedRoutine.title));
//       handleCloseModal();
//     }
//   };

//   return (
//     <>
//       <div className="main-page-detail-routine-add-title">루틴 추가하기</div>
//       <div className="main-page-detail-routine-add-container">
//         <input
//           placeholder="12:00"
//           className="main-page-detail-routine-add-input-time"
//           value={newRoutine.time}
//           onChange={(e) =>
//             dispatch(setNewRoutine({ ...newRoutine, time: e.target.value }))
//           }
//         />
//         <input
//           placeholder="목표를 적어보세요."
//           className="main-page-detail-routine-add-input-content"
//           value={newRoutine.title}
//           onChange={(e) =>
//             dispatch(setNewRoutine({ ...newRoutine, title: e.target.value }))
//           }
//         />
//       </div>
//       <div className="main-page-detail-routine-day-title-container">
//         <div className="main-page-detail-routine-day-title">실천 요일</div>
//         <div className="main-page-detail-routine-day-sub-title">
//           최소 2일 선택
//         </div>
//       </div>
//       <div className="main-page-detail-routine-day-container">
//         {['월', '화', '수', '목', '금', '토', '일'].map((day, index) => (
//           <div
//             key={index}
//             className={`main-page-detail-routine-day-item ${
//               newRoutine.recurringDays.some((d) => d.day === day)
//                 ? 'selected'
//                 : ''
//             }`}
//             onClick={() => handleDaySelection(day)}
//           >
//             {day}
//           </div>
//         ))}
//       </div>
//       <div className="main-page-detail-routine-alert-title">
//         알림 설정
//         <label className="switch">
//           <input
//             type="checkbox"
//             name="notification"
//             checked={newRoutine.notification || false}
//             onChange={(e) =>
//               dispatch(
//                 setNewRoutine({ ...newRoutine, notification: e.target.checked })
//               )
//             }
//           />
//           <span className="slider"></span>
//         </label>
//       </div>

//       <div className="main-page-detail-routine-prev-container">
//         <div className="main-page-detail-routine-prev-title">기존 루틴</div>
//         {routineData.map((event, index) => (
//           <div
//             className="main-page-detail-routine-prev-info-container"
//             key={index}
//           >
//             <div className="main-page-detail-routine-prev-info-time">
//               {event.time}
//             </div>
//             <div className="main-page-detail-routine-prev-info-content">
//               {event.title}
//               <More onClick={() => handleMoreClick(event)} />
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="main-page-detail-routine-add-button-container">
//         <button
//           className="main-page-detail-routine-add-button"
//           onClick={handleAddRoutine}
//         >
//           루틴 추가
//         </button>
//       </div>

//       <CreatePersonalRoutineModal
//         isOpen={isModalOpen}
//         onClose={handleCloseModal}
//         routine={selectedRoutine}
//         onChangeRoutine={setSelectedRoutine}
//         onSave={handleSaveRoutine}
//         onDelete={handleDeleteRoutine}
//       />
//     </>
//   );
// };

// export default CreatePersonalRoutine;

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setNewRoutine,
  addRoutine,
  updateRecurringDays,
  updateRoutine,
  deleteRoutine,
} from '../../../redux/routine';
import { ReactComponent as More } from '../../../assets/main/More.svg';
import CreatePersonalRoutineModal from './CreatePersonalRoutineModal';

const CreatePersonalRoutine = ({ routineData, setRoutineData }) => {
  const dispatch = useDispatch();
  const newRoutine = useSelector((state) => state.routine.newRoutine);

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedRoutine, setSelectedRoutine] = useState(null);

  const handleDaySelection = (day) => {
    const dayExists = newRoutine.recurringDays.some((d) => d.day === day);
    const updatedDays = dayExists
      ? newRoutine.recurringDays.filter((d) => d.day !== day)
      : [...newRoutine.recurringDays, { day, success: false }];

    dispatch(updateRecurringDays(updatedDays));
  };

  const handleAddRoutine = () => {
    if (
      newRoutine.title &&
      newRoutine.time &&
      newRoutine.recurringDays.length >= 2
    ) {
      dispatch(addRoutine(newRoutine));
      dispatch(
        setNewRoutine({
          title: '',
          time: '',
          recurringDays: [],
          notification: false,
        })
      );
      console.log('New routine added:', newRoutine);
    } else {
      alert('적어도 2일 이상 선택해주세요');
    }
  };

  const handleMoreClick = (routine) => {
    setSelectedRoutine(routine);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedRoutine(null);
  };

  const handleSaveRoutine = () => {
    if (selectedRoutine) {
      dispatch(updateRoutine(selectedRoutine));
      handleCloseModal();
    }
  };

  const handleDeleteRoutine = () => {
    if (selectedRoutine) {
      dispatch(deleteRoutine(selectedRoutine.title)); // 타이틀을 넘겨줌
      handleCloseModal();
    }
  };

  return (
    <>
      <div className="main-page-detail-routine-add-title">루틴 추가하기</div>
      <div className="main-page-detail-routine-add-container">
        <input
          placeholder="12:00"
          className="main-page-detail-routine-add-input-time"
          value={newRoutine.time}
          onChange={(e) =>
            dispatch(setNewRoutine({ ...newRoutine, time: e.target.value }))
          }
        />
        <input
          placeholder="목표를 적어보세요."
          className="main-page-detail-routine-add-input-content"
          value={newRoutine.title}
          onChange={(e) =>
            dispatch(setNewRoutine({ ...newRoutine, title: e.target.value }))
          }
        />
      </div>
      <div className="main-page-detail-routine-day-title-container">
        <div className="main-page-detail-routine-day-title">실천 요일</div>
        <div className="main-page-detail-routine-day-sub-title">
          최소 2일 선택
        </div>
      </div>
      <div className="main-page-detail-routine-day-container">
        {['월', '화', '수', '목', '금', '토', '일'].map((day, index) => (
          <div
            key={index}
            className={`main-page-detail-routine-day-item ${
              newRoutine.recurringDays.some((d) => d.day === day)
                ? 'selected'
                : ''
            }`}
            onClick={() => handleDaySelection(day)}
          >
            {day}
          </div>
        ))}
      </div>
      <div className="main-page-detail-routine-alert-title">
        알림 설정
        <label className="switch">
          <input
            type="checkbox"
            name="notification"
            checked={newRoutine.notification || false}
            onChange={(e) =>
              dispatch(
                setNewRoutine({ ...newRoutine, notification: e.target.checked })
              )
            }
          />
          <span className="slider"></span>
        </label>
      </div>

      <div className="main-page-detail-routine-prev-container">
        <div className="main-page-detail-routine-prev-title">기존 루틴</div>
        {routineData.map((event, index) => (
          <div
            className="main-page-detail-routine-prev-info-container"
            key={index}
          >
            <div className="main-page-detail-routine-prev-info-time">
              {event.time}
            </div>
            <div className="main-page-detail-routine-prev-info-content">
              {event.title}
              <More onClick={() => handleMoreClick(event)} />
            </div>
          </div>
        ))}
      </div>

      <div className="main-page-detail-routine-add-button-container">
        <button
          className="main-page-detail-routine-add-button"
          onClick={handleAddRoutine}
        >
          루틴 추가
        </button>
      </div>

      <CreatePersonalRoutineModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        routine={selectedRoutine}
        onChangeRoutine={setSelectedRoutine}
        onSave={handleSaveRoutine}
        onDelete={handleDeleteRoutine}
      />
    </>
  );
};

export default CreatePersonalRoutine;
