package services;

import entities.ResultEntity;
import entities.UserEntity;
import exceptions.UserAlreadyExistsException;
import jakarta.ejb.Stateless;
import jakarta.persistence.EntityManager;
import jakarta.persistence.NoResultException;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;
import utils.PasswordManager;

import java.util.List;

@Stateless
public class DatabaseManager {

    @PersistenceContext(unitName = "persistence-unit")
    private EntityManager em;

    public void saveResult(ResultEntity resultEntity) {
        em.persist(resultEntity);
    }

    public List<ResultEntity> getResults() {
        return em.createQuery("SELECT r FROM ResultEntity r", ResultEntity.class).getResultList();
    }

    public void clearResults() {
        em.createQuery("DELETE FROM ResultEntity").executeUpdate();
    }

    public void saveUser(UserEntity userEntity) throws UserAlreadyExistsException {
        UserEntity user = findUser(userEntity.getLogin());

        if (user != null) {
            throw new UserAlreadyExistsException("User already exists");
        }

        userEntity.setPassword(PasswordManager.hashPassword(userEntity.getPassword()));
        em.persist(userEntity);
    }

    public UserEntity findUser(String login) {
        try {
            TypedQuery<UserEntity> query = em.createQuery("SELECT u FROM UserEntity u WHERE u.login = :login", UserEntity.class);
            query.setParameter("login", login);
            return query.getSingleResult();
        } catch (NoResultException e) {
            return null;
        }
    }
}
