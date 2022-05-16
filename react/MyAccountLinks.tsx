import PropTypes from "prop-types";
//@ts-ignore
import { injectIntl } from "react-intl";

//@ts-ignore
const MyAccountLinks = ({ render, intl }: any) => {
    return render([
        {
            name: "Direcciones",
            path: "/direcciones",
        }
    ]);
};

MyAccountLinks.propTypes = {
    render: PropTypes.func.isRequired
};

export default injectIntl(MyAccountLinks);