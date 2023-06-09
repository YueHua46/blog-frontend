import YHContainer from '../../components/YHContainer/YHContainer'
import Contact from '../Contact/Contact'
import Styles from './Archive.module.scss'

export default function Archive() {
  return (
    <YHContainer>
      <div className={`${Styles['archive-container']} flex`}>
        {/* 左边归档集 */}
        <div className={`${Styles['container-fluid']}`}>
          <div className={`${Styles['row']} ${Styles['example-basic']}`}>
            <div
              className={`${Styles['col-md-12']} ${Styles['example-title']}`}>
              <h2>Basic Timeline</h2>
              <p>Extra small devices (phones, less than 768px)</p>
            </div>
            <div
              className={`${Styles['col-xs-10']} ${Styles['col-xs-offset-1']} ${Styles['col-sm-8']} ${Styles['col-sm-offset-2']}`}>
              <ul className={`${Styles.timeline}`}>
                <li className={`${Styles['timeline-item']}`}>
                  <div className={`${Styles['timeline-info']}`}>
                    <span>March 12, 2016</span>
                  </div>
                  <div className={`${Styles['timeline-marker']}`}></div>
                  <div className={`${Styles['timeline-content']}`}>
                    <h3 className={`${Styles['timeline-title']}`}>
                      Event Title
                    </h3>
                    <p>
                      Nullam vel sem. Nullam vel sem. Integer ante arcu,
                      accumsan a, consectetuer eget, posuere ut, mauris. Donec
                      orci lectus, aliquam ut, faucibus non, euismod id, nulla.
                      Donec vitae sapien ut libero venenatis faucibus. ullam
                      dictum felis eu pede mollis pretium. Pellentesque ut
                      neque.
                    </p>
                  </div>
                </li>
                <li className={`${Styles['timeline-item']} ${Styles.period}`}>
                  <div className={`${Styles['timeline-info']}`}></div>
                  <div className={`${Styles['timeline-marker']}`}></div>
                  <div className={`${Styles['timeline-content']}`}>
                    <h2 className={`${Styles['timeline-title']}`}>
                      April 2016
                    </h2>
                  </div>
                </li>
                <li className={`${Styles['timeline-item']}`}>
                  <div className={`${Styles['timeline-info']}`}>
                    <span>April 02, 2016</span>
                  </div>
                  <div className={`${Styles['timeline-marker']}`}></div>
                  <div className={`${Styles['timeline-content']}`}>
                    <h3 className={`${Styles['timeline-title']}`}>
                      Event Title
                    </h3>
                    <p>
                      Nullam vel sem. Nullam vel sem. Integer ante arcu,
                      accumsan a, consectetuer eget, posuere ut, mauris. Donec
                      orci lectus, aliquam ut, faucibus non, euismod id, nulla.
                      Donec vitae sapien ut libero venenatis faucibus. ullam
                      dictum felis eu pede mollis pretium. Pellentesque ut
                      neque.{' '}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 右边联系集 */}
        <div className={`${Styles['archive-contact']} flex-[3]`}>
          <Contact />
        </div>
      </div>
    </YHContainer>
  )
}
