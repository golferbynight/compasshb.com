<?php namespace CompassHB\Www\Http\Requests;

class SongRequest extends Request
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        // @todo
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => 'required|min:3',
            'excerpt' => 'required',
            'body' => 'required',
            'video' => 'required|url',
        ];
    }
}
