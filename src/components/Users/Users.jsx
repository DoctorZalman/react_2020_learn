import React from 'react';
import styles from "./users.module.css";
import userPhoto from '../../assets/image/hr.png'
import {NavLink} from "react-router-dom";

let Users = ({ totalUsersCount, pageSize, currentPage, onPageChanged, users, unfollow, follow }) => {
	let pagesCount = Math.ceil(totalUsersCount / pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	return <div>
		<div>
			{pages.map(p => {
				return <span className={currentPage === p && styles.selectedPage}
				             onClick={(e) => {
					             onPageChanged(p);
				             }}>{p}</span>
			})}
		</div>
		{
			users.map(u => <div key={u.id}>
				<span>
					<div>
						<NavLink to={'/profile/ + u.id'}>
						<img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}
					          alt='ava'/>
						</NavLink>
					</div>
					<div>
						{u.followed
							? <button onClick={() => unfollow(u.id)}>Unfollow</button>
							: <button onClick={() => follow(u.id)}>Follow</button>
						}
						</div>
				</span>
				<span>
					<span>
						<div>{u.name}</div>
						<div>{u.status}</div>
					</span>
					<span>
						<div>{'u.location.country'}</div>
						<div>{'u.location.city'}</div>
					</span>
				</span>
			</div>)
		}
	</div>
}
export default Users;