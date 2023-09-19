from judge import compare_user_answer


correct_answer = 42


def script_user():
    a = 40
    b = 2
    return a + b


compare_user_answer(script_user(), correct_answer)




