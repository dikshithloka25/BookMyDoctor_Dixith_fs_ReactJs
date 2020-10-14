package com.abridged.bookmydoctor.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.PersistenceUnit;
import javax.persistence.Query;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import com.abridged.bookmydoctor.dto.AppointmentInfoBean;
import com.abridged.bookmydoctor.dto.AvailabilityDates;
import com.abridged.bookmydoctor.dto.DoctorInfoBean;
import com.abridged.bookmydoctor.exception.AppointmentException;
import com.abridged.bookmydoctor.exception.AvailabilityException;
import com.abridged.bookmydoctor.exception.DoctorException;

@Repository
public class DoctorDaoImpl implements DoctorDao {
	@PersistenceUnit
	private EntityManagerFactory emf;

	@Override
	public boolean addDoctor(DoctorInfoBean bean) {

		EntityManager manager = emf.createEntityManager();
		EntityTransaction transaction = manager.getTransaction();
		transaction.begin();
		try {
			manager.persist(bean);
			transaction.commit();
			return true;

		} catch (Exception e) {
			transaction.rollback();
			e.printStackTrace();
		}
		throw new DoctorException("Doctor Cannot be Added please check the credentials");
	}

	@Override
	public DoctorInfoBean loginDoctor(String email, String password) {
		EntityManager manager = emf.createEntityManager();
		EntityTransaction transaction = manager.getTransaction();
		transaction.begin();
		String login = "select d from DoctorInfoBean d";
		TypedQuery<DoctorInfoBean> query = manager.createQuery(login, DoctorInfoBean.class);

		List<DoctorInfoBean> records = query.getResultList();
		transaction.commit();
		for (DoctorInfoBean record : records) {
			if (email.equals(record.getEmail()) && password.equals(record.getPassword())) {
				return record;
			}
		}
		
		throw new DoctorException("Please Enter valid Credentials or signUp if you are new");
	}

	@Override
	public boolean editDoctorProfile(DoctorInfoBean bean) {
		EntityManager manager = emf.createEntityManager();
		EntityTransaction transaction = manager.getTransaction();
		transaction.begin();
		try {
			DoctorInfoBean doctor = manager.find(DoctorInfoBean.class, bean.getDoctorId());
			doctor.setDoctorId(bean.getDoctorId());
			doctor.setDoctorName(bean.getDoctorName());
			doctor.setEmail(bean.getEmail());
			doctor.setHospitalName(bean.getHospitalName());
			doctor.setLocation(bean.getLocation());
			doctor.setMobileNo(bean.getMobileNo());
			doctor.setSpeciality(bean.getSpeciality());
			doctor.setPassword(bean.getPassword());
			transaction.commit();
			return true;
		} catch (Exception e) {
			transaction.rollback();
			e.printStackTrace();
		}
		throw new DoctorException("Doctor not updated once check the ID");
	}

	@Override
	public boolean deleteAppointment(int appointmentId) {

		String jpql = "delete from AppointmentInfoBean a where a.appointmentId =:id ";
		EntityManager manager = emf.createEntityManager();
		EntityTransaction transaction = manager.getTransaction();
		try {
			transaction.begin();

			Query query = manager.createQuery(jpql);
			query.setParameter("id", appointmentId);

			int i = query.executeUpdate();

			transaction.commit();
			if (i != 0) {
				return true;
			}
		} catch (Exception e) {
			transaction.rollback();
			e.printStackTrace();
		}

		throw new AppointmentException("Appointment not deleted,Please check the ID");
	}

	@Override
	public boolean updateAppointment(AppointmentInfoBean bean) {
		EntityManager manager = emf.createEntityManager();
		EntityTransaction transaction = manager.getTransaction();
		transaction.begin();
		try {

			AppointmentInfoBean appointmentInfoBean = manager.find(AppointmentInfoBean.class, bean.getAppointmentId());
			appointmentInfoBean.setAppointmentDate(bean.getAppointmentDate());
			transaction.commit();
			return true;

		} catch (Exception e) {
			transaction.rollback();
			e.printStackTrace();
		}
		throw new AppointmentException("Appointment not updated,Please check the ID");
	}

	@Override
	public List<AppointmentInfoBean> getDoctorAppointmentList(int doctorId) {
		EntityManager manager = emf.createEntityManager();

		String jpql = "select z from AppointmentInfoBean z where z.doctor.doctorId =:id";

		TypedQuery<AppointmentInfoBean> query = manager.createQuery(jpql, AppointmentInfoBean.class);
		query.setParameter("id", doctorId);
		List<AppointmentInfoBean> appointmentList = query.getResultList();

		if(appointmentList!=null) {
			
			return appointmentList;
		}
		throw new AppointmentException("No Doctor Found With the ID");
	}

	@Override
	public boolean addAvailability(AvailabilityDates bean) {

		EntityManager manager = emf.createEntityManager();
		EntityTransaction transaction = manager.getTransaction();
		transaction.begin();
		try {
			manager.persist(bean);
			transaction.commit();
			return true;

		} catch (Exception e) {
			transaction.rollback();

			e.printStackTrace();
		}
		throw new AvailabilityException("AvailabilityDates not Added");
	}

	@Override
	public boolean updateAvailability(AvailabilityDates bean) {

		EntityManager manager = emf.createEntityManager();
		EntityTransaction transaction = manager.getTransaction();
		transaction.begin();
		try {

			AvailabilityDates newAvailability = manager.find(AvailabilityDates.class, bean.getAvailabilityId());
			newAvailability.setFromDate(bean.getFromDate());
			newAvailability.setToDate(bean.getToDate());
			
			transaction.commit();
			return true;

		} catch (Exception e) {
			transaction.rollback();

		}
		throw new AvailabilityException("Dates are not updated");
	}

}
