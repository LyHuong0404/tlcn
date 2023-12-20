/* eslint-disable jsx-a11y/anchor-is-valid */
function Messages() {
    return (
        <section>
            <div class="content">
                <div class="content-messages">
                    <div class="row no-gutters">
                        <div class="col">
                            <div class="heading-messages">
                                <h3>Messages</h3>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="breadcrumb">
                                <div class="breadcrumb-item">
                                    <i class="fas fa-angle-right"></i>
                                    <a>Messages</a>
                                </div>
                                <div class="breadcrumb-item active">
                                    <i class="fas fa-angle-right"></i>Inbox
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="box">
                        <ul class="nav nav-pills justify-content-center">
                            <li class="nav-item">
                                <a class="nav-link" href="messages-compose.html">
                                    Compose
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active">Inbox</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="messages-sent.html">
                                    Sent
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="messages-important.html">
                                    Important
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="messages-starred.html">
                                    starred
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="messages-drafts.html">
                                    Drafts
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="messages-trash.html">
                                    Trash
                                </a>
                            </li>
                        </ul>
                        <div class="row">
                            <div class="col">
                                <div class="inbox-header justify-content-center d-flex">
                                    <ul class="list-unstyled list-inline">
                                        <li class="list-inline-item">
                                            <a class="btn" data-toggle="tooltip" data-html="true" title="Redo">
                                                <i class="fas fa-redo-alt"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="btn" data-toggle="tooltip" data-html="true" title="Archive">
                                                <i class="fas fa-archive"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="btn" data-toggle="tooltip" data-html="true" title="Trash">
                                                <i class="fas fa-trash-alt"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="btn" data-toggle="tooltip" data-html="true" title="Folders">
                                                <i class="fas fa-folder"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="btn" data-toggle="tooltip" data-html="true" title="Tag">
                                                <i class="fas fa-tags"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item dropdown p-0 m-0">
                                            <a
                                                class="btn dropdown-btn "
                                                id="navbarDropdown"
                                                role="button"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                <span>More</span>
                                                <i class="fas fa-angle-down"></i>
                                            </a>

                                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <a class="dropdown-item">
                                                    <i class="fas fa-pencil-alt"></i>Mark as Read{' '}
                                                </a>
                                                <a class="dropdown-item">
                                                    <i class="fas fa-ban"></i>Spam <i class="fas"></i>
                                                </a>
                                                <a class="dropdown-item">
                                                    <i class="fas fa-trash-alt"></i>Delete
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <table class="table table-hover mx-auto">
                            <tr class="unread">
                                <td>
                                    <div class="todo-check">
                                        <input type="checkbox" value="None" id="todo-check1" />
                                        <label htmlFor="todo-check1"></label>
                                    </div>
                                </td>
                                <td>
                                    <i class="fas fa-star"></i>
                                </td>
                                <td>
                                    <i class="fas fa-gem active1"></i>
                                </td>
                                <td>Ryan Corey</td>
                                <td>
                                    <a>Kevin Welcome on LinkedIn.</a>
                                </td>
                                <td>
                                    <i class="fa fa-paperclip"></i>
                                </td>
                                <td>10:27 AM</td>
                            </tr>
                            <tr class="unread">
                                <td>
                                    <div class="todo-check pull-left">
                                        <input type="checkbox" value="None" id="todo-check2" />
                                        <label htmlFor="todo-check2"></label>
                                    </div>
                                </td>
                                <td>
                                    <i class="far fa-star active2"></i>
                                </td>
                                <td>
                                    <i class="fas fa-gem"></i>
                                </td>
                                <td>Haley</td>
                                <td>
                                    <a>Welcome To University Of Alaska Kevin</a>
                                </td>
                                <td>
                                    <i class="fa fa-paperclip"></i>
                                </td>
                                <td>Nov 19</td>
                            </tr>
                            <tr class="unread">
                                <td>
                                    <div class="todo-check pull-left">
                                        <input type="checkbox" value="None" id="todo-check2" />
                                        <label htmlFor="todo-check2"></label>
                                    </div>
                                </td>
                                <td>
                                    <i class="fas fa-star"></i>
                                </td>
                                <td>
                                    <i class="fas fa-gem"></i>
                                </td>
                                <td>John Doe</td>
                                <td>
                                    <a>Fwd: Important Data Regarding To your Website</a>
                                </td>
                                <td>
                                    <i class="fa fa-paperclip"></i>
                                </td>
                                <td>Nov 17</td>
                            </tr>
                            <tr class="unread">
                                <td>
                                    <div class="todo-check pull-left">
                                        <input type="checkbox" value="None" id="todo-check2" />
                                        <label htmlFor="todo-check2"></label>
                                    </div>
                                </td>
                                <td>
                                    <i class="far fa-star active2"></i>
                                </td>
                                <td>
                                    <i class="fas fa-gem"></i>
                                </td>
                                <td>Smith Roy</td>
                                <td>
                                    <a>Hello Kevin! Apply now for MS</a>
                                </td>
                                <td></td>
                                <td>Nov 17</td>
                            </tr>
                            <tr class="unread">
                                <td>
                                    <div class="todo-check pull-left">
                                        <input type="checkbox" value="None" id="todo-check2" />
                                        <label htmlFor="todo-check2"></label>
                                    </div>
                                </td>
                                <td>
                                    <i class="far fa-star active2"></i>
                                </td>
                                <td>
                                    <i class="fas fa-gem active1"></i>
                                </td>
                                <td>Harry Parker</td>
                                <td>
                                    <a>Transaction Alert For Your ABC Bank</a>
                                </td>
                                <td>
                                    <i class="fa fa-paperclip"></i>
                                </td>
                                <td>Nov 16</td>
                            </tr>
                            <tr class="unread">
                                <td>
                                    <div class="todo-check pull-left">
                                        <input type="checkbox" value="None" id="todo-check2" />
                                        <label htmlFor="todo-check2"></label>
                                    </div>
                                </td>
                                <td>
                                    <i class="fas fa-star"></i>
                                </td>
                                <td>
                                    <i class="fas fa-gem active1"></i>
                                </td>
                                <td>Finn Boland</td>
                                <td>
                                    <a>Good Luck For Your Next Journey to Website Development</a>
                                </td>
                                <td>
                                    <i class="fa fa-paperclip"></i>
                                </td>
                                <td>Nov 16</td>
                            </tr>
                            <tr class="unread">
                                <td>
                                    <div class="todo-check pull-left">
                                        <input type="checkbox" value="None" id="todo-check2" />
                                        <label htmlFor="todo-check2"></label>
                                    </div>
                                </td>
                                <td>
                                    <i class="fas fa-star"></i>
                                </td>
                                <td>
                                    <i class="fas fa-gem active1"></i>
                                </td>
                                <td>Gollon Marry</td>
                                <td>
                                    <a>Please Sign up for your new account to use all the services</a>
                                </td>
                                <td></td>
                                <td>Nov 14</td>
                            </tr>
                            <tr class="unread">
                                <td>
                                    <div class="todo-check pull-left">
                                        <input type="checkbox" value="None" id="todo-check2" />
                                        <label htmlFor="todo-check2"></label>
                                    </div>
                                </td>
                                <td>
                                    <i class="fas fa-star"></i>
                                </td>
                                <td>
                                    <i class="fas fa-gem"></i>
                                </td>
                                <td>Amar</td>
                                <td>
                                    <a>Ceo of XYZ Company Usage</a>
                                </td>
                                <td>
                                    <i class="fa fa-paperclip"></i>
                                </td>
                                <td>Nov 14</td>
                            </tr>
                            <tr class="unread">
                                <td>
                                    <div class="todo-check pull-left">
                                        <input type="checkbox" value="None" id="todo-check2" />
                                        <label htmlFor="todo-check2"></label>
                                    </div>
                                </td>
                                <td>
                                    <i class="far fa-star active2"></i>
                                </td>
                                <td>
                                    <i class="fas fa-gem active1"></i>
                                </td>
                                <td>Mary Jane</td>
                                <td>
                                    <a>Help us make your website Security better by giving feedback</a>
                                </td>
                                <td></td>
                                <td>Nov 13</td>
                            </tr>
                            <tr class="unread">
                                <td>
                                    <div class="todo-check pull-left">
                                        <input type="checkbox" value="None" id="todo-check2" />
                                        <label htmlFor="todo-check2"></label>
                                    </div>
                                </td>
                                <td>
                                    <i class="fas fa-star"></i>
                                </td>
                                <td>
                                    <i class="fas fa-gem active1"></i>
                                </td>
                                <td>Sara Hector</td>
                                <td>
                                    <a>Welcome To Our Cyber Security </a>
                                </td>
                                <td></td>
                                <td>Nov 13</td>
                            </tr>
                            <tr class="unread">
                                <td>
                                    <div class="todo-check pull-left">
                                        <input type="checkbox" value="None" id="todo-check2" />
                                        <label htmlFor="todo-check2"></label>
                                    </div>
                                </td>
                                <td>
                                    <i class="fas fa-star"></i>
                                </td>
                                <td>
                                    <i class="fas fa-gem"></i>
                                </td>
                                <td>Mary Finner</td>
                                <td>
                                    <a>Now your account is available for professional services</a>
                                </td>
                                <td>
                                    <i class="fa fa-paperclip"></i>
                                </td>
                                <td>Nov 13</td>
                            </tr>
                        </table>
                        <div class="page-navigation d-flex justify-content-end">
                            <a>
                                <i class="fas fa-angle-left"></i>
                            </a>
                            <a>
                                <i class="fas fa-angle-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Messages;
